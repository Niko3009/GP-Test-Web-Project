import classNames from 'classnames'

import Filter from 'shared/icons/Filter'

import styles from './styles/App.module.css'
import { availableStatuses, availableTypes } from './assets'

export function TableTitle({ children }) {
    return (
        <div className={styles['table-window__table-titles-cell']}>
            <p>{children}</p>
            <div className={styles['table-window__table-titles-filter-icon']}>
                <Filter styleClass={'white'} />
            </div>
        </div>
    )
}

export function TableCell({ children, className }) {
    return (
        <div
            className={classNames(styles['table-window__table-content-cell'], {
                [className]: className,
            })}
        >
            <p>{children}</p>
        </div>
    )
}

export function TypeTableCell({ type }) {
    const ruType = availableTypes[type]
    return <TableCell>{ruType || 'Неизвестен'}</TableCell>
}

export function StatusTableCell({ status }) {
    const ruStatus = availableStatuses[status]
    return (
        <TableCell
            className={classNames(styles['status-cell'], {
                [styles[status]]: ruStatus,
            })}
        >
            {ruStatus || 'Неизвестен'}
        </TableCell>
    )
}
