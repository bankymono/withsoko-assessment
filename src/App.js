
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Bag from './components/Bag/Bag';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import ProductDetail from './components/Home/ProductDetail/ProductDetail';
import Account from './components/Account/Account';
import Address from './components/Address/Address';
import Purchase from './components/Purchase/Purchase';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
import TrackOrder from './components/TrackOrder/TrackOrder';
import { useState, createContext } from 'react';


export const ProductsContext = createContext()

function App() {
  const [isCategory, setIsCategory] = useState(false)
  const [goForward,setGoForward] = useState('');
  const [goBack,setGoBack] = useState('');

  return (
    <ProductsContext.Provider
    value={ {goForward, 
      setGoForward, 
      goBack, 
      setGoBack}}
    >
    <div>
      <Navigation isCategory={isCategory} />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/bag">
          <Bag />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/address">
          <Address />
        </Route>
        <Route exact path="/purchase">
          <Purchase />
        </Route>
        <Route exact path="/confirm">
          <ConfirmationPage />
        </Route>
        <Route exact path="/track-order">
          <TrackOrder />
        </Route>
        <Route exact path="/:id">
          <ProductDetail setIsCategory={setIsCategory} />
        </Route> 

      </Switch>
  
    </div>
    </ProductsContext.Provider>
  );
}

export default App;
