import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const bgColorClassName = isDarkTheme ? 'dark-bg' : 'white-bg'

      const aboutHeadingClassName = isDarkTheme ? 'white-color' : 'dark-color'

      return (
        <div className={`about-container ${bgColorClassName}`}>
          <img src={aboutImageUrl} alt="about" className="about-image" />
          <h1 className={`about-heading ${aboutHeadingClassName}`}>About</h1>
        </div>
      )
    }}
  </ThemeContext>
)

export default About
