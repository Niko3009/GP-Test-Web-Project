import { useState, useEffect } from 'react'
import getDate from 'date-and-time'
import classNames from 'classnames'
import Modal from 'modules/Modal'
import { Label, Text, optionTypes } from './components'

import checkFormValidation from './funcs/checkFormValidation'

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
    const [descriptionValue, setDescriptionValue] = useState('')

    const [isAutorError, setAutorError] = useState(false)
    const [isTypeError, setTypeError] = useState(false)
    const [isDescriptionError, setDescriptionError] = useState(false)

    const [postError, setPostError] = useState(false)

    const newAppealData = {
        autor: autorValue,
        type: typeValue,
        description: descriptionValue,
    }

    const approveAppealData = async () => {
        const formValidationError = checkFormValidation(newAppealData)
        if (formValidationError) {
            if (formValidationError === 'type') setTypeError(true)
            if (formValidationError === 'autor') setAutorError(true)
            if (formValidationError === 'description') setDescriptionError(true)
        } else {
            const postResult = await callbackNewAppeal(newAppealData)
            const status = postResult?.data?.status
            const error = postResult?.data?.details
            if (status === 'success') closeModal()
            else setPostError(error || 'Ошибка отправки')
        }
    }

    const resetAppealData = () => {
        setAutorValue('')
        setTypeValue('')
        setDescriptionValue('')
        setAutorError(false)
        setTypeError(false)
        setDescriptionError(false)
        setPostError('')
    }

    useEffect(() => {
        if (!isAppealFormOpen) resetAppealData()
    }, [isAppealFormOpen])

    return (
        <Modal
            isModalOpen={isAppealFormOpen}
            setModalOpen={setAppealFormOpen}
            callbackControl={(control) => setModalControl(control)}
        >
            <div className={classNames(styles.wrapper)}>
                <div className={styles['modal-string']}>
                    <Label>{'Дата'}</Label>
                    <Text>{getDate.format(new Date(), 'DD.MM.YYYY')}</Text>
                </div>

                <div className={styles['modal-string']}>
                    <Label>{'Автор'}</Label>
                    <input
                        className={classNames(
                            styles['modal-field'],
                            styles['modal-input'],
                            {
                                [styles.error]: isAutorError,
                            }
                        )}
                        placeholder={'Введите имя'}
                        value={autorValue}
                        onChange={({ target }) => {
                            setAutorError(false)
                            setAutorValue(target.value)
                        }}
                    />
                </div>

                <div className={styles['modal-string']}>
                    <Label>{'Тип обращения'}</Label>
                    <select
                        className={classNames(
                            styles['modal-field'],
                            styles['modal-select'],
                            {
                                [styles.error]: isTypeError,
                                [styles.filled]: typeValue,
                            }
                        )}
                        value={typeValue}
                        onChange={({ target }) => {
                            setTypeError(false)
                            setTypeValue(target.value)
                        }}
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
                    placeholder={'Добавьте описание'}
                    value={descriptionValue}
                    onChange={({ target }) => {
                        setDescriptionError(false)
                        setDescriptionValue(target.value)
                    }}
                    className={classNames(
                        styles['modal-field'],
                        styles['modal-textarea'],
                        {
                            [styles.error]: isDescriptionError,
                        }
                    )}
                />

                <button
                    className={styles['modal-button']}
                    onClick={() => {
                        setPostError('')
                        approveAppealData()
                    }}
                >
                    {'Отправить'}
                </button>

                <Label>{postError}</Label>
            </div>
        </Modal>
    )
}
export { AppealAddingForm }
