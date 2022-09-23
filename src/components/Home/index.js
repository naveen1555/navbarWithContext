import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-dark-bg' : 'home-white-bg'

      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeHeadingClassName = isDarkTheme
        ? 'white-heading-color'
        : 'dark-heading-color'

      return (
        <div className={`home-container ${homeBgClassName}`}>
          <img src={homeImageUrl} alt="home" className="home-image" />
          <h1 className={`home-heading ${homeHeadingClassName}`}>Home</h1>
        </div>
      )
    }}
  </ThemeContext>
)

export default Home
