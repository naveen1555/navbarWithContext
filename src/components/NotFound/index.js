import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgColor = isDarkTheme
        ? 'not-found-dark-bg-color'
        : 'not-found-white-bg-color'

      const notFoundColor = isDarkTheme
        ? 'white-color-not-found'
        : 'dark-color-not-found'
      return (
        <div className={`not-found-container ${notFoundBgColor}`}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="not-found-image"
          />
          <h1 className={`not-found-heading ${notFoundColor}`}>
            Lost Your Way?
          </h1>
          <p className={`not-found-description ${notFoundColor}`}>
            We cannot seem to find the page
          </p>
        </div>
      )
    }}
  </ThemeContext>
)

export default NotFound
