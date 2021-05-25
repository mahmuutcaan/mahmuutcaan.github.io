import React from 'react';
import SignUp from './SignUp';
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import { Route,  useHistory, Switch, BrowserRouter} from 'react-router-dom'
import {AuthProvider} from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

const App = () => {
    const history = useHistory()
  return (
      <AuthProvider>
            <div>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute exact path={'/HomePage'} component={HomePage} />
                     <Route path='/' exact component={Login} />
                    <Route path='/Login' exact component={Login} />
                    <Route path='/SignUp' exact component={SignUp} />
                <Route path='/HomePage' exact component={HomePage} />
                    </Switch>
                </BrowserRouter>
            </div>


      </AuthProvider>
  );
};

export default App;
