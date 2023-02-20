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





function App() {
  return (
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
  );
}

export default App;
