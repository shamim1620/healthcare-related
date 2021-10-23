
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./component/Footer/Footer";
import Header from './component/Header/Header';
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import NotFound from "./component/NotFound/NotFound";
import Appointment from "./component/Appointment/Appointment";
import Doctors from "./component/Doctors/Doctors";
import Career from "./component/Career/Career";
import DetailPage from "./component/DetailPage/DetailPage";
import Login from "./component/Login/Login/Login";




function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">

            <Home></Home>

          </Route>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/services">
            <Services></Services>

          </Route>
          <Route path="/detail/:serviceId">
            <DetailPage></DetailPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>

          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/career">
            <Career></Career>

          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>

          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
