import GroceryItem from "../GroceryItem/GroceryItem";

const ShoppingList = ({shoppingList, updateItem}) => {

    return (
        <>
         <div className="shopping-list">
            {shoppingList.map(item =>
                
           (<GroceryItem
                key={item.id}
                item={item}
                updateItem={updateItem}
            />)
                
                )}

         </div>


        </>
    )

}


export default ShoppingList; 