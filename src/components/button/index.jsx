/* eslint-disable react/prop-types */
import './style.css'

export function Button({title, handleClick}) {
    return (
        <button onClick={handleClick} className="button">{title}</button>
    )
}