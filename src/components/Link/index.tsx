import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface LinkProps {
    children: ReactNode;
    href: string;
}

export function Link({ children, href }: LinkProps) {
  return (
    <a className={styles.link} href={href}>{children}</a>
  );
}
