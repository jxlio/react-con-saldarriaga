import "./styles/styles.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Login from "./pages/login";
import Registro from "./pages/registro";
import Admin from "./pages/admin";
import PublicLayaout from "./layaouts/publicLayaout";
import PrivateLayaout from "./layaouts/privateLayaout";
import AuthLayaout from "./layaouts/authLayaout";

import Indexo from "./pages/admin/indexo";
import Vehiculos from "./pages/admin/vehiculos";
import Clientes from "./pages/admin/clientes";
import { darkModeContext } from "./context/oscuroModo";
import { useEffect, useState } from "react";





function App() {

  const [darkMode, setDarkMode] = useState(false)
  useEffect(()=>{
    console.log("Modo dark", darkMode)
  },[darkMode])
  return (
    <div className="App">

      <darkModeContext.Provider value={{darkMode, setDarkMode}}>


      <Router>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/admin", "/admin/vehiculos", "/admin/clientes"]}>
            <PrivateLayaout>
              <Switch>
                <Route exact path={"/admin/vehiculos"}>
                  <Vehiculos/>
                </Route>
                <Route exact path={"/admin/clientes"} >
                  <Clientes exact/>
                </Route>
                <Route exact path={"/admin"}>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayaout>
          </Route>
          <Route exact path={["/login", "/registro"]}>
            <AuthLayaout>
              <Switch>
                <Route exact path={"/login"} >
                  <Login />
                </Route>
                <Route exact path={"/registros"}>
                  <Registro />
                </Route>
              </Switch>
            </AuthLayaout>
          </Route>
          <Route path={["/"]}>
            <PublicLayaout>
              <Switch>
                <Route exact path={"/"} >
                  <Indexo />
                </Route>
              </Switch>
            </PublicLayaout>
          </Route>
        </Switch>
      </BrowserRouter>
      </Router>

      </darkModeContext.Provider>
    
    </div>
    );
}

export default App;
