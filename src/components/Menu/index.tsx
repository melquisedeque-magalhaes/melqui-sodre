import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';

import { Link } from '../Link';
import { ModalMenuMobile } from './ModalMenuMobile';

import styles from './styles.module.scss';


export function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isWideVersion = useMediaQuery({ query: '(min-width: 1024px)' });

    function handleChangeStateModal() {
        setIsMenuOpen(oldValue => !oldValue)
    }

    if (isWideVersion) {
        return (
            <div className={styles.header}>
                <Link href="#sobre-mim">Sobre Mim</Link>
                <Link href="#sobre-mim">Tecnologias</Link>
                <Link href="#sobre-mim">Projetos</Link>
                <Link href="#sobre-mim">Contatos</Link>
            </div>
        );
    }

    return (
        <>
            <div className={styles.menuMobile}>

                <div className={styles.buttonMenuContainer}>
                    <Hamburger color="#fff" toggled={isMenuOpen} toggle={setIsMenuOpen} />
                </div>

            </div>

            {
                isMenuOpen && (
                    <ModalMenuMobile
                        isOpenMenuMobile={isMenuOpen}
                        handleCloseModal={handleChangeStateModal}
                    />
                )
            }
        </>
    );
}
