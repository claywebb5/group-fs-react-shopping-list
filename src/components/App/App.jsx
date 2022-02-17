import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    let [shoppingList, setShoppingList] = useState([]);

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

    // get items on page load
    useEffect (() => {
        getItem();
    }, [])

    console.log('shoppingList', shoppingList);

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
