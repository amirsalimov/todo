import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddtoForm";

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <>
          <PrivateRoute path="/todos" component={TodoList} />
          <PrivateRoute path="/add-todo" component={AddTodoForm} />
        </>
      </div>
    </Router>
  );
};

export default App;
