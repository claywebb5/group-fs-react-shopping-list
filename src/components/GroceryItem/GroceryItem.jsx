function GroceryItem({item, updateItem}) {

    function handlePurchased() {
        console.log('in handlePurchased');

        updateItem(item.id);
    }

    return (
        <>  
            <div>
                <div>  {item.item} </div>
                <div>  {item.quantity} {item.unit} </div>
                <div>  <button
                    onClick={handlePurchased}
                >Buy
                </button>
                    <button
                    >Remove
                    </button>
                </div>
            </div>
        </>
    )
}

export default GroceryItem;