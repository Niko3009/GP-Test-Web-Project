import classNames from 'classnames'

import Filter from 'shared/icons/Filter'

import { availableStatuses, availableTypes } from './assets'

import styles from './styles/App.module.css'

export function TableTitle({ children, name, setSort, sort }) {
    const isActiveSort = name === sort
    return (
        <div
            className={styles['table-window__table-titles-cell']}
            onClick={() => setSort(!isActiveSort ? name : '')}
        >
            <p>{children}</p>
            <div className={styles['table-window__table-titles-filter-icon']}>
                <Filter styleClass={isActiveSort ? 'green' : 'white'} />
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
    return <TableCell>{ruType || 'Не известен'}</TableCell>
}

export function StatusTableCell({ status }) {
    const ruStatus = availableStatuses[status]
    return (
        <TableCell
            className={classNames(styles['status-cell'], {
                [styles[status]]: ruStatus,
            })}
        >
            {ruStatus || 'Не известен'}
        </TableCell>
    )
}

export function QueryMessage({ children }) {
    return (
        <div className={classNames(styles['query-message'])}>
            <p>{children}</p>
        </div>
    )
}
