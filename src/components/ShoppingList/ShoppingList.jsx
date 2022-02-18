

const ShoppingList = ({shoppingList}) => {


    return (
        <>
         <div className="shopping-list">
            {shoppingList.map(item =>
                
           ( <div>
            <div>  {item.name} </div> 
            <div>  {item.quantity} {item.unit} </div> 
             <div>  <button>Buy</button>   <button>Remove</button> </div>
           </div> )
                
                )}

         </div>


        </>
    )

}


export default ShoppingList; 