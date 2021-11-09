import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import './App.css'
import Header from './components/header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import CheckoutPage from './pages/checkout/CheckoutPage'
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shoppage/ShopPage'
import SigninAndRegister from './pages/signin-and-register-page/SigninAndRegister'
import { setCurrentUser } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelector'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninAndRegister />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
