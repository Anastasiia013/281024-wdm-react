import OrderList from '../OrderList/OrderList'
import OrderStatus from '../OrderStatus/OrderStatus'
import TravelCard from '../TravelCard/TraverCard';

import './App.css'

import orders from '../../data/orders';
import travels from '../../data/travels';


function App() {
  const travelElements = travels.map(item => <TravelCard key={item.id} {...item} />);
  return (
    <>
      {travelElements}
     {/* <OrderList items={orders} />
     {orders.map(item => <OrderStatus key={item.orderId} orderId={item.orderId} status={item.status} />)} */}
    </>
  )
}

export default App
