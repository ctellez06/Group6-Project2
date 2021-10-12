import React, { useState, useEffect } from 'react';
import "./home.scss";
//import { FaEdit, FaTrash } from 'react-icons/fa';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
    let list = localStorage.getItem('list'); 
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
};
function Home() {
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);

    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
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
        /*<div className="home" id="home">
            <div className="imgContainer container-fluid">
                
                <img src="assets/Grocery_900x.jpg" alt="" />
                
            </div>
            
        </div>*/
        <section className='section-center'>
            <form className='grocery-form' onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

                <div className='form-control'>
                    <textarea
                        type='text'
                        className='grocery'
                        placeholder='Enter your item'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit' className='submit-btn'>
            {isEditing ? 'rename' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            delete items
          </button>
        </div>
      )}
    </section>
  );
}



export default Home;