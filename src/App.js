import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'
import signinAndRegister from './pages/signin-and-register-page/signin-and-register'
import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(this.state.currentUser)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={signinAndRegister} />
        </Switch>
      </div>
    )
  }
}

export default App
