import { env } from 'app/config/env';
import { shopifyUrls } from './urls';

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN!,
      }),
    });

    const { smart_collections } = await response.json();

    const transformedCollections = smart_collections.map(
      ({ id, title, handle }: any) => ({
        id,
        title,
        handle,
      })
    );

    return transformedCollections;
  } catch (error) {
    console.error(error);
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN!,
      }),
    });

    const { products } = await response.json();

    return products;
  } catch (error) {
    console.error(error);
  }
};
