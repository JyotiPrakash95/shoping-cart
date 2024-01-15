import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomProviderComponent from "./itemContext";

function App() {
  return (
    <CustomProviderComponent>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CustomProviderComponent>
  );
}
export default App;
