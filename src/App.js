import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'
import signinAndRegister from './pages/signin-and-register-page/signin-and-register'

function App() {
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

export default App
