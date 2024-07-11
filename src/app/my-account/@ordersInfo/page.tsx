import { getCustomerOrders } from 'app/services/shopify/shopify/customer';

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();

  return (
    <div>
      <section>
        <h2>My orders</h2>
        {ordersInfo.orders?.map((order: any) => (
          <p key={order.orderNumber}>{order.orderNumber}</p>
        ))}
      </section>
    </div>
  );
}
