
import ShoppingList from "../ShoppingList/ShoppingList";


const GroceryContainer = ({shoppingList, updateItem}) => {

    return (
        <>

            <div className="grocery-container">
                <h1>Shopping List</h1>
                <button>Reset</button>
                <button>Clear</button>
            
                <ShoppingList 
                shoppingList={shoppingList}
                updateItem={updateItem}
                />
                
                </div>
        </>
    )


}


export default GroceryContainer; 