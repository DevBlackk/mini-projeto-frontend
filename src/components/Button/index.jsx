import style from "./style.module.css"

export function Button({ value }) {
    return <button className={style.button} >{value}</button>
}