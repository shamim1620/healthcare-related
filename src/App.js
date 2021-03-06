
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
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./component/Login/PrivateRoute/PrivateRoute";
import Register from "./component/Login/Register/Register";




function App() {
  return (
    <div className="App">

      <AuthProvider>
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
            <PrivateRoute path="/detail/:serviceId">
              <DetailPage></DetailPage>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>

            </Route>
            <Route path="/about">
              <About></About>

            </Route>
            <Route path="/register">
              <Register></Register>
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
      </AuthProvider>

    </div>
  );
}

export default App;
