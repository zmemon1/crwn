
import Navigation from "./Routes/Navigation/Navigation.components";
import Home from "./Routes/Home/Home.components";
import Shop from "./Routes/Shop/Shop.components";
import Authentication from "./Routes/Authentication/Authentication.components";
import Checkout from "./Routes/CheckOut/CheckOut.component"
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index={true} element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
