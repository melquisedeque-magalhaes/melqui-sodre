import styles from './styles.module.scss';
import { myInfos } from "../../constants/myInfos"

export function AboutMe() {

    return (
        <div id="sobre-mim" className={styles.container}>

            <div className={styles.content}>
                <h1>Sobre mim</h1>

                <p>
                    {myInfos.aboutMe.text}
                </p>
            </div>

            <div className={styles.contentImg}>

                <img alt="Melqui Sodré" src="/Melqui.png"  />

            </div>
        </div>
    );
}
