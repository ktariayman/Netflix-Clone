import React , {useEffect}from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { logout , login, selectUser } from './features/counter/userSlice';
import { getByDisplayValue } from '@testing-library/react';
import {useDispatch , useSelector} from "react-redux"
import ProfileScreen from './screens/ProfileScreen';
function App() {
  const user = useSelector(selectUser) ;
  const dispatch = useDispatch();
  useEffect(() => {
    
      const unsubscribe = auth.onAuthStateChanged
      (userAuth => {
        if(userAuth){
            console.log(userAuth);
            dispatch(login({
              uid : userAuth.uid,
              email : userAuth.email,
              
            }))
        }else{  
            dispatch(logout())
        }
      });
      return unsubscribe;
      
    
  }, [dispatch]);
  return (
    <div className="app">
        <Router>
          {!user? (
              <LoginScreen/>
          ):(
            <Switch>
              <Route exact  path="/">
                <HomeScreen />
              </Route>
              
              <Route  path='/profile'>
                <ProfileScreen />
              </Route>
            </Switch> 
          )}
            
        </Router>

       
    </div>
  );
}

export default App;
