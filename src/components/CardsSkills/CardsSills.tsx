import Image from 'next/image';

import styles from './styles.module.scss';

interface CardSkillsProps{
    srcImg: string;
    altImg: string;
    titleCard: string;
    descriptionCard: string;
}
export function CardSkills({
  srcImg, altImg, titleCard, descriptionCard,
}:CardSkillsProps) {
  return (

    <div className={styles.container}>

      <div className={styles.containerImage}>
        <Image
          src={`/${srcImg}`}
          alt={altImg}
          width={65}
          height={60}
        />

      </div>

      <h1>{titleCard}</h1>

      <p>{descriptionCard}</p>

    </div>
  );
}
