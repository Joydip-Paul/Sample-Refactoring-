import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './Component/Shared/Navbar/Navbar';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import BookAppointment from './Component/BookAppointment/BookAppointment';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/book-appointment">
            <BookAppointment />
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
