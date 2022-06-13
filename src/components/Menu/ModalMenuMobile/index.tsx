import Modal from 'react-modal';
import { FiXCircle } from 'react-icons/fi'
import { Link } from '../../Link';

import styles from './styles.module.scss';

interface ModalMenuMobileProps {
    isOpenMenuMobile: boolean;
    handleCloseModal: () => void;
}

export function ModalMenuMobile({ handleCloseModal, isOpenMenuMobile } : ModalMenuMobileProps) {

    const customStyles = {
        content: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          height: '100%',
          width: '100%',
          padding: '0px',
          overflow: 'hidden',
          border: '0px',
          borderRadius: '0px'
        },
      };


    return (
        <Modal
            isOpen={isOpenMenuMobile}
            onRequestClose={handleCloseModal}
            style={customStyles}
        >
            <button className={styles.buttonCloseMobile} type='button' onClick={handleCloseModal}>
                <FiXCircle size={40} color="#fff" />
            </button>

            <div className={styles.menuMobileFull}>

                <div className={styles.navigator}>
                    <Link href="#sobre-mim">Sobre Mim</Link>
                    <Link href="#sobre-mim">Tecnologias</Link>
                    <Link href="#sobre-mim">Projetos</Link>
                    <Link href="#sobre-mim">Contatos</Link>
                </div>
            </div>
        </Modal>
    )
}
