import React from "react";
import Navbar from "./components/Navbar";
import CategoryDetail from "./components/CategoryDetail";
import PostDetail from "./components/PostDetail";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar categories={categories} />
        <Switch>
          <Route path="/category/:id" exact component={CategoryDetail} />
          <Route path="/post/:id" exact component={PostDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
