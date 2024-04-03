import { Card } from "../card";
import './style.css'



export function SectionCard() {
    return (
        <section className='section-card'>
            <div className="container-card">
                <Card content='Users' userData={user}/>
            </div>
        </section>

    )
}