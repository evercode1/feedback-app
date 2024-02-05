import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Header({ bgColor, textColor, text }) {

    const headerStyles = {

        backgroundColor: bgColor, 
        color: textColor,

    }

    const linkStyles = {

        color: '#ff6a95',
        textDecoration: 'none', 
    };

    return (

        <header style={headerStyles}>

            <div className="container">

                <h2><Link to="/" style={linkStyles}>{text}</Link></h2>

            </div>
      
        </header>

    )

}

Header.propTypes = { 
    
    text: PropTypes.string,
    bgColor: PropTypes.string, 
    textColor: PropTypes.string  

}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)', 
  textColor: '#ff6a95'
}

export default Header
