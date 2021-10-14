import Register from '../../components/register/Register'
import Signin from '../../components/signin/Signin'
import './SigninAndRegister.scss'

export default function SigninAndRegister() {
  return (
    <div className="sign-in-and-register">
      <Signin />
      <Register />
    </div>
  )
}
