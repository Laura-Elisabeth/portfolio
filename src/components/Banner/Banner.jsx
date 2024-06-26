import React from 'react';
import Modal from 'react-modal';

import styles from './Banner.module.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(245,209,16, 0.9)',
      border: 'none',
      borderRadius: '20px',
      width: '60%',
      height: '60%',
      fontFamily: '"Gill Sans", sans-serif;'
    },
};

Modal.setAppElement('#root');

function Banner({picture}) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = 'color: rgb(65, 41, 96, 1)';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={styles.Banner}>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <div className={styles.modalAll} id="home">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Bonjour !</h2>
                    <div className={styles.presentationList}>
                        <p>Je suis développeuse web Full Stack, JavaScript, React et Express !</p>
                        <p>J'ai également des compétences en HTML et CSS, ce site vous en donne un bref aperçu.</p>
                        <p>Vous pourrez trouver dans la section Projets les liens vers mes repositories GitHub.</p>
                    </div>
                </div>
            </Modal>
            <div className={styles.Text}>
                <h1>Laura-Elisabeth Dos Reis</h1>
                <p>
                    Développeuse web Full Stack 
                </p>
                <p>
                </p>
                <div className={styles.DomaineDiv}>
                    <button className={styles.Domaine} onClick={openModal}>
                        <div className={styles.DevButton}>
                            <p>
                                Développement web 
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;