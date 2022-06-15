import { CardSkills } from '../CardsSkills';

import styles from './styles.module.scss';

export function Skills() {
  return (
      <div className={styles.container}>
        <h1>SKILLS</h1>

        <div className={styles.content}>
            <CardSkills
                srcImg="html.png"
                altImg="imagem logo HTML"
                titleCard="HTML"
                descriptionCard="HTML é uma linguagem de marcação utizada na construção de página web"
            />

            <CardSkills
                srcImg="css.png"
                altImg="imagem logo CSS"
                titleCard="CSS"
                descriptionCard="HTML é uma linguagem de marcação utizada na construção de página web"
            />

            <CardSkills
                srcImg="html.png"
                altImg="imagem logo HTML"
                titleCard="HTML"
                descriptionCard="HTML é uma linguagem de marcação utizada na construção de página web"
            />
        </div>

    </div>

  );
}
