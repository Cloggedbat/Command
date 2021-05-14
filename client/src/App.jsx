import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import GlobalProvider from './Utils/GlobalContext';
import MainP from './Pages/Homepage';
import land from './Pages/Landingpage';
// import Header from '../components/CrypNavbar'

// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <GlobalProvider> */}
      {/* <Header /> */}

      <div className="App">
        <Switch>
          <Route exact path='/' component={land} />

        </Switch>
      </div>
      {/* </GlobalProvider> */}
    </Router>
  );
}


export default App;