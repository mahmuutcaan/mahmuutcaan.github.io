import React from 'react';
import SignUp from './components/SignUp';
import Login from "./components/Login";
import HomePage from "./components/HomePage/HomePage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    const history = useHistory()
  return (
      <AuthProvider>
            <div>
                <Router>
                    <Switch>
                        <PrivateRoute path={'/HomePage'} exact component={HomePage} />
                         <Route path='/' exact component={Login} />
                           <Route path='/Login' exact component={Login} />
                         <Route path='/SignUp' exact component={SignUp} />
                <Route path='/HomePage' exact component={HomePage} />
                    </Switch>
                </Router>
            </div>
      </AuthProvider>
  );
};

export default App;
