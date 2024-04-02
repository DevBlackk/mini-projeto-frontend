import style from "./style.module.css"

export function Logo({title}) {
    return (
        <div>
            <h1 className={style.logo} >{title}</h1>
        </div>
    )
}