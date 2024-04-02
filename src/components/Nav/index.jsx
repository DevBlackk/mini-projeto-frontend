import { NavItem } from "../NavItem";
import style from "./style.module.css";

export function Nav() {
    return (
        <div>
            <ul className={style.navUl} >
                <NavItem reference='Home' />
                <NavItem reference='Users' />
                <NavItem reference='Musics' />
                <NavItem reference='Artists' />
            </ul>
        </div>
    )
}