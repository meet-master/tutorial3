import "./App.css";
import ResponsiveAppBar from "./components/commons/navbar";
import OrdersTable from "./components/order_management/orderLists";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <OrdersTable />
    </>
  );
}

export default App;
