import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    let [shoppingList, setShoppingList] = useState([]);

    // =================== GET ITEMS ==========================
    const getItem = () => {
        console.log('in getItem');
        axios.get('/list')
            .then((response) => {
                setShoppingList(response.data)
                console.log('in getItem .then', response.data);
            }).catch((err) => {
                console.log('in getItem .catch', err);
            })
    } // end getItems

    // =================== POST ITEM ==========================

    // =================== USE EFFECT ==========================
    // get items on page load
    useEffect(() => {
        getItem();
    }, [])

    console.log('shoppingList', shoppingList);

    return (
        <div className="App">
            <Header />
            <main>
                <form>
                    <label>Item:</label>
                    <input type="text"/>
                </form>
            </main>
        </div>
    );
}

export default App;
