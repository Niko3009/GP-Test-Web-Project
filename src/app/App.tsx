import { useState } from 'react'
import Provider from 'store/Provider'
import { usePostNewAppealMutation } from 'store/api'
import AppealAddingForm from './Modals/AppealAddingForm'
import Table from './Table'

import 'global/styles/global-styles.css'
import styles from './styles/App.module.css'

export default function App() {
    return (
        <Provider>
            <div className={styles.wrapper}>
                <TableWindow />
            </div>
        </Provider>
    )
}

export function TableWindow({ btnTestId }: { btnTestId?: number }) {
    const [postNewAppealMutation] = usePostNewAppealMutation()

    const [isAppealFormOpen, setAppealFormOpen] = useState<boolean>()
    const addAppeal = () => setAppealFormOpen(true)

    const postNewAppeal = async (appealData) => {
        const postData = { ...appealData }
        postData.date = new Date()
        const postResult = await postNewAppealMutation(postData)
        return postResult
    }

    return (
        <div className={styles['table-window']}>
            <ControlPanel addAppeal={addAppeal} btnTestId={btnTestId} />
            <Table />

            <AppealAddingForm
                {...{ isAppealFormOpen, setAppealFormOpen }}
                callbackNewAppeal={postNewAppeal}
            />
        </div>
    )
}

export function ControlPanel({ addAppeal, btnTestId }) {
    return (
        <div className={styles['table-window__control-panel']}>
            <p
                className={styles['table-window__control-action']}
                onClick={() => addAppeal()}
                data-testid={btnTestId}
            >
                {'+ создать обращение'}
            </p>
        </div>
    )
}
