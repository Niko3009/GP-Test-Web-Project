import { useEffect } from 'react'
import CrossIcon from 'shared/icons/Cross'

import styles from './WindowModal.module.css'

export default function WindowModal({ closeModal, callbackControl, children }) {
    useEffect(() => {
        callbackControl({ closeModal })
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.window}>
                <div className={styles.scrollWrapper}>
                    <div className={styles.content}>{children}</div>
                </div>
                <div
                    className={styles.closeButtonBox}
                    onClick={() => closeModal()}
                >
                    <CrossIcon className={styles.closeIcon} />
                </div>
            </div>
        </div>
    )
}
export { WindowModal }
