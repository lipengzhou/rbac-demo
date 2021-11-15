import request from '../utils/request'

export const getRoles = () => {
  return request.get('/roles')
}

export const createRole = (data: any) => {
  return request.post('/roles', data)
}

export const updateRole = (id: string, data: any) => {
  return request.put(`/roles/${id}`, data)
}

export const removeRole = (id: string) => {
  return request.delete(`/roles/${id}`)
}

export const getRole = (id: string) => {
  return request.get(`/roles/${id}`)
}
