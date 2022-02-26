import { CardSkills } from '../CardsSkills/CardsSills';
import styles from './styles.module.scss';

export function Skills() {
  return (
    <div className={styles.container}>
      <CardSkills
        srcImg="html.png"
        altImg="imagem logo HTML"
        titleCard="HTML"
        descriptionCard="HTML é uma linguagem de
    marcação utizada na construção de página web"
      />
      <CardSkills
        srcImg="css.png"
        altImg="imagem logo CSS"
        titleCard="CSS"
        descriptionCard="HTML é uma linguagem de
    marcação utizada na construção de página web"
      />
    </div>

  );
}
