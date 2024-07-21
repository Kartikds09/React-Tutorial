import React,{useState} from "react"
function MyComponent_onChange(){
    
    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("Visa");
    const [shipping,setshipping] =useState("Delivery");

    function handleShipping(event){
        setshipping(event.target.value);
    }


    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantity(event)
    {
        setQuantity(event.target.value);
    }

    function handleComment(event)
    {
        setComment(event.target.value);
    }

    function handlePayment(event)
    {
        setPayment(event.target.value);
    }
    
    

    return(
        <>
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantity} />
            <p>Quantity: {quantity}</p>
            
            <textarea value={comment} onChange={handleComment} placeholder="Enter delivery intructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">MasterCard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={handleShipping}/>
                Pickup
            </label>
                <br />
            <label htmlFor="">
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping}/>Delivery
            </label>

            <p>Shipping: {shipping}</p>

        </div>
        </>
    )
}
export default MyComponent_onChange