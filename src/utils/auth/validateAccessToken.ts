import { GraphQLClientSingleton } from 'app/graphql';
import { customerName } from 'app/graphql/queries/customerName';
import { cookies } from 'next/headers';

export const validateAccessToken = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get('accessToken')?.value || '';
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  const { customer } = (await graphqlClient.request(customerName, {
    customerAccessToken: accessToken,
  })) as any;

  return customer;
};
