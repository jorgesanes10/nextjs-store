import { env } from 'app/config/env';
import { shopifyUrls } from './urls';

export const getProducts = async (
  id?: string
): Promise<ProductType[] | undefined> => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;

    const response = await fetch(apiUrl, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN!,
      }),
    });

    const { products } = await response.json();

    const transformedProducts = products.map(
      ({ variants, title, body_html, handle, tags, image, ...rest }: any) => ({
        id: rest.id,
        gql_id: variants[0].admin_graphql_api_id,
        title,
        description: body_html,
        price: variants[0].price,
        image: image.src,
        quantity: variants[0].inventory_quantity,
        handle,
        tags,
      })
    );

    return transformedProducts;
  } catch (error) {
    console.error(error);
  }
};

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN!,
    }),
    cache: 'force-cache',
    next: {
      tags: ['main-products'],
    },
  });

  const { products } = await response.json();

  return products;
};
