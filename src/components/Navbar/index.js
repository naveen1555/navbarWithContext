import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NavBar = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navbarBgColor = isDarkTheme ? 'navbar-dark-bg' : 'navbar-white-bg'

      const appLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navBarOptionsColor = isDarkTheme
        ? 'white-color-options'
        : 'dark-color-options'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onClickThemeButton = () => {
        toggleTheme()
      }

      return (
        <div className={`nav-bar-container ${navbarBgColor}`}>
          <img src={appLogoUrl} alt="website logo" className="app-logo" />
          <ul className="home-and-about-container">
            <li className="nav-bar-option">
              <Link to="/" className={`link-item ${navBarOptionsColor}`}>
                Home
              </Link>
            </li>
            <li className="nav-bar-option">
              <Link to="/about" className={`link-item ${navBarOptionsColor}`}>
                About
              </Link>
            </li>
          </ul>
          <button type="button" className="theme-button">
            <img
              src={themeImageUrl}
              alt="theme"
              className="theme"
              onClick={onClickThemeButton}
            />
          </button>
        </div>
      )
    }}
  </ThemeContext>
)

export default NavBar
