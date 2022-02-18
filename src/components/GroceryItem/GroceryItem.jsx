function GroceryItem({item}) {

    function handlePurchased() {
        console.log('in handlePurchased');
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