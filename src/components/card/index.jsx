/* eslint-disable react/prop-types */
import './style.css'

export function Card({ userData, content }) {
    return (
        <div>
            <h1 className='card-title'>{content}</h1>
            <div className='card'>
                {userData.map(data => (

                    <div key={data.id} style={{ flexDirection: "row" }}>
                        <div className='content-card'>
                            <h1 className='model'> {data.username} </h1>
                            <p className='model'> {data.email} </p>
                            <p className='model'> {data.userType} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}