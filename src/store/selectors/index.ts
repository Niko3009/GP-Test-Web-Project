import slices from 'store/slices'

export const getStore = (store) => {
    return store
}

export const getData = ({ [slices.name]: data }) => {
    return data
}
