import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import GroceryContainer from '../GroceryContainer/GroceryContainer.jsx';


function App() {

    let [shoppingList, setShoppingList] = useState([]);
    let [newName, setNewName] = useState('');
    let [newQuantity, setNewQuantity] = useState('');
    let [newUnit, setNewUnit] = useState('');
    let [purchased, setPurchased] = useState(false);

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
    const addItem = () => {
        event.preventDefault();
        console.log('in addItem');

        let newItem = { item: newName, quantity: newQuantity, unit: newUnit }
        console.log(newItem);
        axios({
            method: 'POST',
            url: '/list',
            data: newItem
        }).then((res) => {
            console.log('in POST.then', res);

            // rerender new list from database
            getItem();

            // clear inputs
            setNewName('');
            setNewQuantity('');
            setNewUnit('');
        }).catch((err) => {
            console.log('err in POST.catch', err);
        })
    }

    // =================== UPDATE ITEM ==========================
    function updateItem(id) {
        console.log(id);

        axios({
            method: 'PUT',
            url: `/list/${id}`,
            data: {
                purchased: setPurchased(true)
            }
        }).then((res) => {
            console.log('in PUT.then', res);

            // rerender new list from database
            getItem();

        }).catch((err) => {
            console.log('err in POST.catch', err);
        })
    }

    // =================== USE EFFECT ==========================

    // get items on page load
    useEffect(() => {
        getItem();
    }, [])



    return (
        <>
            <div className="App">
                <Header />
                <main>
                    <h1>Add an item</h1>
                    <form onSubmit={addItem}>
                        <label>Item:</label>
                        <input
                            type="text"
                            placeholder="enter item"
                            value={newName}
                            onChange={(event) => setNewName(event.target.value)}
                        />

                        <label>Quantity:</label>
                        <input
                            type="number"
                            placeholder="enter quantity"
                            value={newQuantity}
                            onChange={(event) => setNewQuantity(event.target.value)}
                        />

                        <label>Unit:</label>
                        <input
                            type="text"
                            placeholder="enter unit"
                            value={newUnit}
                            onChange={(event) => setNewUnit(event.target.value)}
                        />

                        <button type="submit">Add item</button>
                    </form>
                    <GroceryContainer
                        shoppingList={shoppingList}
                        updateItem={updateItem}
                    />

                </main>
            </div>
        </>
    );
}

export default App;
