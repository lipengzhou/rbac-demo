import request from '../utils/request'

export const getUsers = () => {
  return request.get<any[]>('/users')
}

export const createUser = (data: any) => {
  return request.post('/users', data)
}

export const updateUser = (id: string, data: any) => {
  return request.put(`/users/${id}`, data)
}

export const removeUser = (id: string) => {
  return request.delete(`/users/${id}`)
}

export const getUser = (id: string) => {
  return request.get(`/users/${id}`)
}
