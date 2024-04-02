import style from "./style.module.css"

export function NavItem({ reference }) {
    return (
        <li className={style.navItem}>
            <a href="#">{reference}</a>
        </li>
    )
}