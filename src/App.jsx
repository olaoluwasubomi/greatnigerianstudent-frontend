import React from "react";
import Nav from "./Navigation/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
const App = () =>{
  return(
    <div>
      {/* <Nav /> */}
      <AppRoutes />
      {/* <Footer /> */}
    </div>
  )
}
export default App;