import { typesOrder, statusesOrder } from 'app/assets'

export default function sortList(list: any[], sort: string) {
    const sortedList = [...list]
    const availableSorts = ['date', 'autor', 'description', 'type', 'status']

    if (availableSorts.includes(sort)) {
        sortedList.sort(function (obj1, obj2) {
            let prop1 = obj1[sort]
            let prop2 = obj2[sort]

            if (sort === 'date') {
                prop1 = new Date(prop1)
                prop2 = new Date(prop2)
            }

            if (sort === 'type') {
                prop1 = typesOrder.indexOf(prop1)
                prop2 = typesOrder.indexOf(prop2)
            }

            if (sort === 'status') {
                prop1 = statusesOrder.indexOf(prop1)
                prop2 = statusesOrder.indexOf(prop2)
            }

            if (prop1 > prop2) return 1
            else if (prop1 < prop2) return -1
            else return 0
        })
    }

    return [...sortedList]
}
export { sortList }
