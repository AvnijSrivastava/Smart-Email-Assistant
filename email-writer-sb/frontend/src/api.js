import axios from 'axios'

const api = axios.create({
  baseURL: '/',
  headers: { 'Content-Type': 'application/json' }
})

export async function generateEmail(payload) {
  const resp = await api.post('/api/email/generate', payload)
  return resp.data
}

export default api
