import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './Component/Shared/Navbar/Navbar';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
