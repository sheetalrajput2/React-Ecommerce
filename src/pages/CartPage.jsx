import useCartStore from "../zustand/store"
import "../css/CartPage.css"

const CartPage = () => {

    const cartItems = useCartStore((state) => state.items);
    const clearCart = useCartStore((state)=> state.clearCart);

const handleClearCart = ()=>{
    clearCart();
}

  return (


  <div className="cartPage">
    <h1>CartItems - ({cartItems.length})</h1>
    <button onClick={handleClearCart} >Clear Cart</button>
    {
        cartItems?.map((item, index) => (
            <div key={index} className="cartItem" >
                <img className="cartImg" src={item.image} alt={item.title} />
                <h3> {item.title} </h3>
                <p> {item.price} </p>
                <p> {item.description}</p>
            </div>
        ))
    }
  </div>
  )
}

export default CartPage