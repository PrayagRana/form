import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Users from "./component/User/Users";
import store from "./Store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserForm from "./component/User/UserForm";
import UserEditForm from "./component/User/UserEditForm";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Users} />
        <Route path="/createUser" component={UserForm} />
        <Route path="/editUser" component={UserEditForm} />
      </Router>
    </Provider>
  );
}

export default App;
