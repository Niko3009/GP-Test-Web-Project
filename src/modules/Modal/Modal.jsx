'use client'

import Wrapper from 'react-modal'
import classNames from 'classnames'
import { useState } from 'react'
import useMediaQuery from 'global/hooks/useMediaQuery'

import WindowModal from './WindowModal'
import SwipeModal from './SwipeModal'

import styles from './styles/Modal.module.css'

export default function CustomModal({
    children,
    isModalOpen,
    setModalOpen,
    type,
    callbackControl = () => {},
}) {
    const [isOverlayHidden, setOverlayHidden] = useState(true)

    const isTabletMode = useMediaQuery('tablet')
    const DefaultModal = isTabletMode ? WindowModal : SwipeModal
    const availableModals = { window: WindowModal, swipe: SwipeModal }
    const Modal = availableModals[type] || DefaultModal

    const closeModal = () => {
        setOverlayHidden(true)
        setTimeout(() => setModalOpen(false), overlayHidingDurationInMS)
    }

    return (
        <Wrapper
            isOpen={isModalOpen}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={false}
            onAfterOpen={() => setOverlayHidden(false)}
            className={styles.modal}
            contentClassName={styles.window}
            overlayClassName={classNames(styles.overlay, {
                [styles.hidden]: isOverlayHidden,
            })}
        >
            <Modal
                {...{
                    isModalOpen,
                    closeModal,
                    overlayHidingDurationInMS,
                    callbackControl,
                }}
            >
                {children}
            </Modal>
        </Wrapper>
    )
}
export { CustomModal as Modal }

export const overlayHidingDurationInMS = styles['hiding-duration-ms']
