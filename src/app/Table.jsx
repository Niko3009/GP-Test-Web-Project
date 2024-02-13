import { useState } from 'react'
import getDate from 'date-and-time'

import AppealDescription from './Modals/AppealDescription'
import { TypeTableCell, StatusTableCell } from './components'
import { TableTitle, TableCell } from './components'

import styles from './styles/App.module.css'

export default function Table() {
    // const [filter, setFilter] = useState({})

    const list = [...new Array(40)].map((item, i) => {
        return {
            autor: 'Вася',
            date: getDate.format(new Date(), 'DD.MM.YYYY'),
            description:
                'Просьба добавить в сервисе построения графиков новый график с годовыми знач...',
            type: 'mistake',
            status: 'processing',
        }
    })

    return (
        <div className={styles['table-window__table']}>
            <div className={styles['table-window__table-titles']}>
                <div className={styles['table-window__table-titles-row']}>
                    <TableTitle>Дата</TableTitle>
                    <TableTitle>Автор</TableTitle>
                    <TableTitle>Описание</TableTitle>
                    <TableTitle>Тип</TableTitle>
                    <TableTitle>Статус</TableTitle>
                </div>
            </div>

            <div className={styles['table-window__table-content']}>
                {list.map((data, i) => (
                    <TableContentRow
                        {...{ data }}
                        key={i + JSON.stringify(data)}
                    />
                ))}
            </div>
        </div>
    )
}
export { Table }

function TableContentRow({ data }) {
    const [isAppealDescriptionOpen, setAppealDescriptionOpen] = useState()
    return (
        <>
            <div
                className={styles['table-window__table-content-row']}
                onClick={() => setAppealDescriptionOpen(true)}
            >
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.autor}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TypeTableCell type={data.type} />
                <StatusTableCell status={data.status} />
            </div>

            <AppealDescription
                appealData={data}
                {...{ isAppealDescriptionOpen, setAppealDescriptionOpen }}
            />
        </>
    )
}
