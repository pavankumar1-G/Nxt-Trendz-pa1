// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isSubmitError: false, errorMsg: ''}

  onChangeUserNameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  renderUserNameInputField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="user-input"
          id="username"
          type="text"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUserNameInput}
        />
      </>
    )
  }

  renderPasswordInputField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="user-input"
          id="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePasswordInput}
        />
      </>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(responseData.error_msg)
    }
  }

  render() {
    const {isSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <div className="logo-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="webSite-mobile-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <form className="form" onSubmit={this.onSubmitForm}>
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="webSite-desktop-logo"
            />
          </div>
          <div className="username-input-container">
            {this.renderUserNameInputField()}
          </div>
          <div className="password-input-container">
            {this.renderPasswordInputField()}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {isSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
