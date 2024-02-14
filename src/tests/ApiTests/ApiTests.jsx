import { render, screen } from '@testing-library/react'
import { http } from 'msw'
import { setupServer } from 'msw/node'
import env from 'global/config/environment'
import { setupApiStore } from 'tests/utils'
import Table from 'app/Table'

import { mock } from './mock'

const apiBaseUrl = env.REACT_APP_API_URL

// endpoint-ы
export const handlers = [
    http.get(`${apiBaseUrl}/appeals`, (req, res, ctx) => {
        return res(ctx.json(mock))
    }),
]

const server = setupServer(...handlers)
const storeRef = setupApiStore(signApi)

export const ApiTests = () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    describe('<Table />', () => apiSelectorTest(Table, `/appeals`, mock))
}
export default ApiTests

const apiSelectorTest = (Selector, url, mock) => {
    const reqURL = BASE_API_URL + url

    it('Should show table data', async () => {
        server.use(http.get(reqURL, (req, res, ctx) => res(ctx.json(mock))))
        render(<Selector />, { wrapper: storeRef.wrapper })

        // Проверяем начальное состояние компонента
        screen.getByText('Загрузка...')

        // Ждем ответа: будет отрисовка
        expect(await screen.findByText('Иванов И.')).toBeInTheDocument()
        expect(await screen.findByText('Загрузка...')).not.toBeInTheDocument()
    })

    it('Should show error if request failed', async () => {
        server.use(http.get(reqURL, (req, res, ctx) => res(ctx.status(500))))
        render(<Selector />, { wrapper: storeRef.wrapper })
        expect(await screen.findByText('Ошибка загрузки')).toBeInTheDocument()
    })
}
