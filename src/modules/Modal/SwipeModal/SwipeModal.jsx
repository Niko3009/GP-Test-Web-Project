'use client'

import classNames from 'classnames'
import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

import styles from './SwipeModal.module.css'

export default function SwipeModal({
    isModalOpen,
    closeModal,
    overlayHidingDurationInMS,
    children,
    callbackControl,
}) {
    const [isWindowHidden, setWindowHidden] = useState(true)

    const closeModalWithSwipe = () => {
        setWindowHidden(true)
        setTimeout(() => closeModal(), windowHidingDurationInMS)
    }

    useEffect(() => {
        if (isModalOpen && isWindowHidden)
            setTimeout(() => setWindowHidden(false), overlayHidingDurationInMS)
    }, [isModalOpen])

    useEffect(() => {
        callbackControl({ closeModal: closeModalWithSwipe })
    }, [])

    return (
        <div className={styles.wrapper}>
            <div
                className={classNames(styles.window, {
                    [styles.hidden]: isWindowHidden,
                })}
            >
                <Tap {...{ closeModalWithSwipe }} />
                <div className={styles.scrollWrapper}>
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </div>
    )
}
export { SwipeModal }

export function Tap({ closeModalWithSwipe }) {
    const { ref } = useSwipeable({
        preventDefaultTouchmoveEvent: true,
        onSwipedDown: () => closeModalWithSwipe(),
    })

    return (
        <div
            className={styles.tap}
            onClick={() => closeModalWithSwipe()}
            ref={ref}
        />
    )
}

export const windowHidingDurationInMS = styles['hiding-duration-ms']
