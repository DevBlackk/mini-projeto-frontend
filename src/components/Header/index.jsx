import { Logo } from "../Logo"
import { Nav } from "../Nav"

import style from "./style.module.css"


export function Header() {
    return (
        <div className={style.header} >
            <Logo title='Music Hub' />
            <Nav />
        </div>
    )
}