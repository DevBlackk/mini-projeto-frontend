import { Button } from "../Button";
import style from "./style.module.css";

export function Image() {
    return (
        <div className={style.container}>
            <img className={style.image} src="https://routenote.com/blog/wp-content/uploads/2021/02/dylan-mcleod-VRdZBLqnoMU-unsplash-scaled.jpg" alt="" />
            <h1 className={style.title} >A new opportunity to be an independent performer</h1>
            <p className={style.subtitle} >Create music anytime, anywhere. Connect with millions. Share your music and interact with fans. Keep 100% of your earnings.</p>
            <div className={style.containerButton} >
                <Button value="Register" />
            </div>
        </div>
    )
}
