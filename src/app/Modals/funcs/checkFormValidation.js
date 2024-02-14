export const checkFormValidation = (formData) => {
    const { autor, type, description } = formData

    const isAutorValid = autor?.length && /^[a-zA-Zа-яёА-ЯЁ]+$/u.test(autor)
    const isTypeValid = type?.length
    const isDescriptionValid = description?.length

    if (!isAutorValid) return 'autor'
    if (!isTypeValid) return 'type'
    if (!isDescriptionValid) return 'description'
}
export default checkFormValidation
