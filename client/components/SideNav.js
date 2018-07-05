import * as React from 'react';
import Link from 'react-router-dom';
const SideNav = (props) => {
  return (
    <ul className="nav flex-column">
        <li>
        <Link to={""} className="nav-link"> </Link>
        </li>
    </ul>
  );
}

export default SideNav;