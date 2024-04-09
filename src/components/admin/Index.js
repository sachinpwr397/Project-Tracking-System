import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Cookies from "js-cookie";
import AuthApi from "./AuthApi";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import AddEmployee from "./AddEmployee";
import AddManager from "./AddManager";
import AddProject from "./AddProject";
function Index() {
  const [auth, setAuth] = React.useState(false);
  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };
  React.useEffect(() => {
    readCookie();
  }, []);
  return (
    <div>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

//  Routes
const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Switch>
      <ProtectedLogin path="/login" auth={Auth.auth} component={Login} />
      <ProtectedRoute
        path="/dashboard"
        auth={Auth.auth}
        component={Dashboard}
      />
      <Route path="/register" component={Register} />
      <ProtectedRoute
        path="/addproject"
        auth={Auth.auth}
        component={AddProject}
      />
      <ProtectedRoute
        path="/addemployee"
        auth={Auth.auth}
        component={AddEmployee}
      />
      <ProtectedRoute
        path="/addmanager"
        auth={Auth.auth}
        component={AddManager}
      />
    </Switch>
  );
};

//  To protect route
const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/dashboard" />)}
    />
  );
};
export default Index;
