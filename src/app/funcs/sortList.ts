export default function sortList(list, sort) {
    const sortedList = [...list]
    const availableSorts = ['date', 'autor', 'description', 'type', 'status']

    if (availableSorts.includes(sort)) {
        sortedList.sort(function (obj1, obj2) {
            let objProp1 = obj1[sort]
            let objProp2 = obj2[sort]

            if (sort === 'date') {
                objProp1 = new Date(objProp1)
                objProp2 = new Date(objProp2)
            }

            if (objProp1 > objProp2) return 1
            else if (objProp1 < objProp2) return -1
            else return 0
        })
    }

    return [...sortedList]
}
export { sortList }
