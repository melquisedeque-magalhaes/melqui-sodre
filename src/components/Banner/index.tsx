import styles from './styles.module.scss'

export function Banner() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h2>Olá, eu sou <span> Melqui Sodré </span></h2>
            <h1>DESENVOLVEDOR FULL STACK</h1>

            <div>
                <a 
                    href='https://www.linkedin.com/in/melqui-sodre/' 
                    target='_blank'
                    className={styles.buttonLinkedin}
                >
                    Linkedin
                </a>
                <a 
                    href='https://github.com/melquisedeque-magalhaes' 
                    target='_blank' 
                    className={styles.buttonGithub}
                >
                    Github
                </a>
            </div>
        </div>
    </div>
  )
}
