import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="inside-header-container">
      <img
        src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694450430/Shopify-Logo_hv8td8.png"
        alt="shopify"
        className="header-logo"
      />
      <select className="select-element">
        <option>Solutions</option>
      </select>
      <p className="header-price">Pricing</p>
      <select className="select-element">
        <option>Resources</option>
      </select>
    </div>
    <div className="header-btn-container">
      <button type="button" className="login-btn">
        Log in
      </button>
      <button type="button" className="start-free-trial-btn">
        start free trial
      </button>
    </div>
    <div className="icon-link-container">
      <p className="link">Start free trial</p>
      <img
        src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694514480/thick-hamburger-menu-bar-line-260nw-274138187_myyidm.webp"
        alt="icon"
        className="icon-element-value"
      />
    </div>
  </nav>
)

export default Header
