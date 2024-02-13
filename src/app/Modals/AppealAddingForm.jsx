import { useState } from 'react'
import getDate from 'date-and-time'
import classNames from 'classnames'
import { availableTypes } from 'app/assets'
import Modal from 'modules/Modal'

import styles from './styles/Modals.module.css'

export default function AppealAddingForm({
    callbackNewAppeal,
    isAppealFormOpen,
    setAppealFormOpen,
}) {
    const [modalControl, setModalControl] = useState(null)
    const closeModal = modalControl?.closeModal
        ? modalControl?.closeModal
        : () => setAppealFormOpen(false)

    const [autorValue, setAutorValue] = useState('')
    const [typeValue, setTypeValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState()

    const optionTypes = Object.entries(availableTypes)

    const nowDate = getDate.format(new Date(), 'DD.MM.YYYY')
    const newAppealData = {
        autor: autorValue,
        type: typeValue,
        description: descriptionValue,
    }

    const approveAppealData = () => {
        callbackNewAppeal(newAppealData)
        closeModal()
    }

    return (
        <Modal
            isModalOpen={isAppealFormOpen}
            setModalOpen={setAppealFormOpen}
            callbackControl={(control) => setModalControl(control)}
        >
            <div className={classNames(styles.wrapper)}>
                <div className={styles['modal-string']}>
                    <Label>{'Дата'}</Label>
                    <Text>{nowDate}</Text>
                </div>

                <div className={styles['modal-string']}>
                    <Label>{'Автор'}</Label>
                    <input
                        className={styles['modal-input']}
                        placeholder={'Введите имя'}
                        value={autorValue}
                        onChange={({ target }) => setAutorValue(target.value)}
                    />
                </div>

                <div className={styles['modal-string']}>
                    <Label>{'Тип обращения'}</Label>
                    <select
                        className={styles['modal-select']}
                        value={typeValue}
                        onChange={({ target }) => setTypeValue(target.value)}
                    >
                        <option value={''} hidden>
                            Выберите тип
                        </option>
                        {optionTypes.map((type) => (
                            <option value={type[0]} key={type[0]}>
                                {type[1]}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles['modal-string']}>
                    <Label>{'Описание'}</Label>
                </div>

                <textarea
                    className={styles['modal-textarea']}
                    placeholder={'Добавьте описание'}
                    value={descriptionValue}
                    onChange={({ target }) => setDescriptionValue(target.value)}
                />

                <button
                    className={styles['modal-button']}
                    onClick={() => approveAppealData()}
                >
                    {'Отправить'}
                </button>
            </div>
        </Modal>
    )
}
export { AppealAddingForm }

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
