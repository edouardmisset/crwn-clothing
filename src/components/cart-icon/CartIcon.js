import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.scss'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'

import { selectCartItemsCount } from '../../redux/cart/cartSelectors'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
