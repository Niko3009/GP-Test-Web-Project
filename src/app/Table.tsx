import { useState } from 'react'
import getDate from 'date-and-time'
import { useGetAllAppealsQuery } from 'store/api'
import AppealDescription from './Modals/AppealDescription'
import { TypeTableCell, StatusTableCell } from './components'
import { TableTitle, TableCell } from './components'
import { QueryMessage } from './components'

import sortList from './funcs/sortList'

import styles from './styles/App.module.css'

export default function Table() {
    const [sort, setSort] = useState('')

    const { data, error, isSuccess, isError, isLoading } =
        useGetAllAppealsQuery()

    const responceData: any = data
    const responceError: any = error
    const list: any[] = responceData?.data || []

    const sortedList = sortList(list, sort)

    const isListReady = isSuccess && !isLoading && sortedList?.length

    return (
        <div className={styles['table-window__table']}>
            <div className={styles['table-window__table-titles']}>
                <div className={styles['table-window__table-titles-row']}>
                    <TableTitle {...{ sort, setSort }} name={'date'}>
                        Дата
                    </TableTitle>
                    <TableTitle {...{ sort, setSort }} name={'autor'}>
                        Автор
                    </TableTitle>
                    <TableTitle {...{ sort, setSort }} name={'description'}>
                        Описание
                    </TableTitle>
                    <TableTitle {...{ sort, setSort }} name={'type'}>
                        Тип
                    </TableTitle>
                    <TableTitle {...{ sort, setSort }} name={'status'}>
                        Статус
                    </TableTitle>
                </div>
            </div>

            <div className={styles['table-window__table-content']}>
                {isListReady &&
                    sortedList.map((data, i) => (
                        <TableContentRow
                            {...{ data }}
                            key={i + JSON.stringify(data)}
                        />
                    ))}

                {isLoading && !list && (
                    <QueryMessage>{'Загрузка...'}</QueryMessage>
                )}

                {isError && (
                    <>
                        <QueryMessage>{'Ошибка загрузки'}</QueryMessage>
                        <QueryMessage>
                            {JSON.stringify(responceError?.error)}
                        </QueryMessage>
                    </>
                )}
            </div>
        </div>
    )
}
export { Table }

function TableContentRow({ data }) {
    const [isAppealDescriptionOpen, setAppealDescriptionOpen] =
        useState<boolean>()

    const date = new Date(data?.date)
    const isDateValid = !isNaN(Date.parse(data?.date))
    const formatDate = isDateValid
        ? getDate.format(date, 'DD.MM.YYYY')
        : 'Неизвестная дата'

    return (
        <>
            <div
                className={styles['table-window__table-content-row']}
                onClick={() => setAppealDescriptionOpen(true)}
            >
                <TableCell>{formatDate}</TableCell>
                <TableCell>{data?.autor}</TableCell>
                <TableCell className={styles.description}>
                    {data?.description}
                </TableCell>
                <TypeTableCell type={data?.type} />
                <StatusTableCell status={data?.status} />
            </div>

            <AppealDescription
                appealData={data}
                formatDate={formatDate}
                {...{ isAppealDescriptionOpen, setAppealDescriptionOpen }}
            />
        </>
    )
}
