import { useState } from 'react'

import Table from './Table'
import AppealAddingForm from './Modals/AppealAddingForm'

import 'global/styles/global-styles.css'
import styles from './styles/App.module.css'

export default function App() {
    return (
        <div className={styles.wrapper}>
            <TableWindow />
        </div>
    )
}

function TableWindow() {
    const [isAppealFormOpen, setAppealFormOpen] = useState()

    const postNewAppeal = (appealData) => {
        const postData = { ...appealData }
        postData.date = new Date()
        console.log(postData)
    }

    return (
        <div className={styles['table-window']}>
            <ControlPanel controlActions={{ setAppealFormOpen }} />

            <Table />

            <AppealAddingForm
                {...{ isAppealFormOpen, setAppealFormOpen }}
                callbackNewAppeal={postNewAppeal}
            />
        </div>
    )
}

function ControlPanel({ controlActions }) {
    const { setAppealFormOpen } = controlActions
    const addAppeal = () => setAppealFormOpen(true)
    return (
        <div className={styles['table-window__control-panel']}>
            <p
                className={styles['table-window__control-action']}
                onClick={() => addAppeal()}
            >
                {'+ создать обращение'}
            </p>
        </div>
    )
}
