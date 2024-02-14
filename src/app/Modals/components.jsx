import { availableTypes } from 'app/assets'

import styles from './styles/Modals.module.css'

export function Label({ children }) {
    return (
        <div className={styles['modal-label']}>
            <p>{children}</p>
        </div>
    )
}

export function Text({ children }) {
    return (
        <div className={styles['modal-text']}>
            <p>{children}</p>
        </div>
    )
}

export const optionTypes = Object.entries(availableTypes)
