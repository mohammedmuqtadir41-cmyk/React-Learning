import "./page.css";

const Cart = () => {
  return (
    <div className="page">
      <div className="page-card">
        <h1>Your Cart</h1>

        <p>
          Your selected food items will appear here. Review your cart,
          update item quantities, view your order summary, and proceed
          to checkout with a seamless ordering experience.
        </p>

        <p>
          Your cart is currently empty. Explore restaurants and add your
          favorite dishes to get started.
        </p>

        <button>Browse Restaurants</button>
      </div>
    </div>
  );
};

export default Cart;