import request from '../utils/request'

export const getResources = () => {
  return request.get('/resources')
}

export const createResource = (data: any) => {
  return request.post('/resources', data)
}

export const updateResource = (id: string, data: any) => {
  return request.put(`/resources/${id}`, data)
}

export const removeResource = (id: string) => {
  return request.delete(`/resources/${id}`)
}

export const getResource = (id: string) => {
  return request.get(`/resources/${id}`)
}
