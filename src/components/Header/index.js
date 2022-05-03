// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-container">
    <Link to="/" className="nav-link">
      <li>Home</li>
    </Link>
    <Link to="/about" className="nav-link">
      <li>About</li>
    </Link>
  </div>
)

export default Header
