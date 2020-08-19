import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ShoppingList from './components/shoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './Store';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';

function App() {
  return (
    
<Provider store = {store}>
      <div>
        <NavBar />
        <Container>
        <ItemModal />
        <ShoppingList />
        </Container>
      </div>
</Provider>

  );
}

export default App;
