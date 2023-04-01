import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../utils/constants'

const Header: React.FC = () => {

  const [activePage,setActivePage] = React.useState(1)

  return (
    <header className="header-page">
      <p className="header-page__left">React Training App</p>
      <nav className="header-page__right navigation">
        {navItems.map(item => (
          <Link onClick={() => setActivePage(item.id)} className={`navigation__link ${activePage === item.id ? 'navigation__link_active' : ''}`} to={item.path}>{item.text}</Link>
        ))}
      </nav>
    </header>
  )
}

export default Header