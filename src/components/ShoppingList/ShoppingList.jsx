import GroceryItem from "../GroceryItem/GroceryItem";

const ShoppingList = ({shoppingList}) => {

    return (
        <>
         <div className="shopping-list">
            {shoppingList.map(item =>
                
           (<GroceryItem
                key={item.id}
                item={item}
            />)
                
                )}

         </div>


        </>
    )

}


export default ShoppingList; 