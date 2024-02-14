import axios from 'axios'
import env from 'global/config/environment'

export const DOMAIN = env.REACT_APP_API_URL || 'http://example.com'

const headers = { Accept: 'application/json' }
const config = { withCredentials: false, baseURL: DOMAIN, headers }

export const apiAxios = axios.create(config)
