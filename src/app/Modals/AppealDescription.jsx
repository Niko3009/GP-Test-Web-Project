import classNames from 'classnames'
import { availableTypes } from 'app/assets'
import Modal from 'modules/Modal'

import styles from './styles/Modals.module.css'

export default function AppealDescription({
    appealData,
    formatDate,
    isAppealDescriptionOpen,
    setAppealDescriptionOpen,
}) {
    const { autor, type, description } = appealData

    const ruType = availableTypes[type] || 'Неизвестен'

    return (
        <Modal
            isModalOpen={isAppealDescriptionOpen}
            setModalOpen={setAppealDescriptionOpen}
        >
            <div className={classNames(styles.wrapper)}>
                <div className={styles['modal-string']}>
                    <Label>{'Дата'}</Label>
                    <Text>{formatDate}</Text>
                </div>

                <div className={styles['modal-string']}>
                    <Label>{'Автор'}</Label>
                    <Text>{autor}</Text>
                </div>

                <div className={styles['modal-string']}>
                    <Label>{'Тип обращения'}</Label>
                    <Text>{ruType}</Text>
                </div>

                <div className={styles['modal-string']}>
                    <Label>{'Описание'}</Label>
                </div>

                <textarea
                    className={classNames(styles['modal-textarea'])}
                    value={description}
                    onChange={() => {}}
                />
            </div>
        </Modal>
    )
}
export { AppealDescription }

function Label({ children }) {
    return (
        <div className={styles['modal-label']}>
            <p>{children}</p>
        </div>
    )
}

function Text({ children }) {
    return (
        <div className={styles['modal-text']}>
            <p>{children}</p>
        </div>
    )
}
