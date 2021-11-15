import request from '../utils/request'

export const getMenus = () => {
  return request.get('/menus')
}

export const createMenu = (data: any) => {
  return request.post('/menus', data)
}

export const updateMenu = (id: string, data: any) => {
  return request.put(`/menus/${id}`, data)
}

export const removeMenu = (id: string) => {
  return request.delete(`/menus/${id}`)
}

export const getMenu = (id: string) => {
  return request.get(`/menus/${id}`)
}
