import { ReactNode } from "react";
import styles from './styles.module.scss'

interface LinkProps {
    children: ReactNode;
    link: string;
}

export function Link({ children, link }: LinkProps ) {
    return(
        <a className={styles.link} href={link}>{children}</a>
    )
}