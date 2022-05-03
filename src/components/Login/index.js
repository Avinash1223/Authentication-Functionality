// Write your JS code here
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const redirectToHome = AccessToken => {
    const {history} = props
    // Cookies.set('jwt_token', jwtToken, {expires: 30})
    Cookies.set('jwt_token', AccessToken, {expires: 30})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const UserDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      redirectToHome(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
