import style from "./style.module.css"

export function Logo({ title }) {
    return (
        <h1 className={style.logo}>{title}</h1>
    )
}