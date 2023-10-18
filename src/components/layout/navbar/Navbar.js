import { useLocation, NavLink, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Langs from '../langs/langs';
import "./Navbar.scss";
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const {t} = useTranslation();

  const navbalinks = t("navbarlinks", {returnObjects: true})
     const location = useLocation();
  return (
<nav className={location.pathname === "/" ?  "navbar navbar-expand-lg" : "navbar navbar-expand-lg active"}>
  <div className="container">
    <Link className="navbar-brand" to="/"> <img className='logo' src='../images/pro-logo.png' alt='codezen' loading="lazy" /> </Link>
    <div className="language-in-responsive">
    <Langs  />
    
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <AiOutlineMenu  className="icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
          navbalinks.map((item)=> {
            return (
             <li className="nav-item" key={item.id}>
              <NavLink className="nav-link" to={item.href}>{item.text}</NavLink>
              </li>
            )
          })
        }
      </ul>
      <div className='langs'>
        <Langs/>
        <Link to = "contact">{t('order')}</Link>
      </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar