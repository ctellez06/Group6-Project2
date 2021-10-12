import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Header from "./components/header/Header";
import Home from "./components/home/Home";

//import {ThemeProvider} from "styled-components";
//import {useDarkMode} from "./components/useDarkMode"
//import { GlobalStyles } from "./components/Globalstyle";
//import { lightTheme, darkTheme } from "./components/Themes"
//import List from './List';
//import Alert from './Alert';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Router>

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      
      
        <div className={"menu " + (menuOpen && "active")}>
          <ul>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#list">List</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#category">Category</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <a href="#Settings">Settings</a>
            </li>
          </ul>

       
    
        </div>
               <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
      </Router>
    </div>
  );
}



/*
function App() { 
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery todoist</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Type your item'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'rename' : 'enter'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Delete items
          </button>
        </div>
      )}
    </section>
  );
}
*/

export default App;