// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header-container">
    <div className="nav-content">
      <div className="website-logo-logout-btn-sm-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-logo"
        />
        <button className="logout-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-icon"
          />
        </button>
      </div>

      <div className="website-logo-logout-btn-menu-lg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-logo"
        />
        <div className="menu-btn-container">
          <ul className="nav-lg-menu-list">
            <li className="nav-menu-item">Home</li>
            <li className="nav-menu-item">Products</li>
            <li className="nav-menu-item">Cart</li>
          </ul>
          <button className="logout-button" type="button">
            Logout
          </button>
        </div>
      </div>
    </div>

    <div className="nav-sm-menu">
      <ul className="nav-sm-menu-list">
        <li className="nav-menu-icon-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="menu-icons"
          />
        </li>
        <li className="nav-menu-icon-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="menu-icons"
          />
        </li>
        <li className="nav-menu-icon-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="menu-icons"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
