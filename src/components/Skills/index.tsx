import { CardSkills } from '../CardsSkills';

import { myInfos } from '../../constants/myInfos'

import styles from './styles.module.scss';

export function Skills() {
  return (
      <div className={styles.container}>

        <h1>SKILLS</h1>

        <div className={styles.content}>

                {
                    myInfos.techs.map(tech => (
                        <CardSkills
                            srcImg={tech.logo}
                            altImg={tech.alt}
                            titleCard={tech.title}
                            descriptionCard={tech.text}
                        />
                    ))
                }



        </div>
    </div>

  );
}
