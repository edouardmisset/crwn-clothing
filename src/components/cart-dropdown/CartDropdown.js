import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import CartItem from '../cart-item/CartItem'
import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.scss'


const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)
