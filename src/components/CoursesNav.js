import React from "react";
import {LINKS} from "../config/courses_configuration";
import {Link} from "react-router-dom";
//LINK - это ключивая корневая функциональность react
//map -обход всего массива, на входе js элемент массива, а на выходе точто мы напишем элемент item, где на выходе будет преобразовываться каждый объект
//export default  - потому что он один
export default function CoursesNav(props) {
const navItems = LINKS.map(link => {
    return <li key={link.path} className="nav-item">
        <Link to={link.path} className="nav-link">
            <span>{link.label}</span>
        </Link>
    </li>
});
    return <ul className="nav">
        {navItems}
    </ul>
}
