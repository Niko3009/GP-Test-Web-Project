import classNames from 'classnames'
import { FiFilter } from 'react-icons/fi'

import styles from './Filter.module.scss'

interface Props {
    styleClass?: string
    className?: string
}

export default function Filter({ styleClass = 'blue', className }: Props) {
    const outerClassName: string = className
    return (
        <div className={styles.wrapper}>
            <FiFilter
                className={classNames([
                    styles[styleClass],
                    { [outerClassName]: !!outerClassName },
                ])}
            />
        </div>
    )
}
export { Filter }
