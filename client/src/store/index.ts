import { defineStore } from 'pinia'
import { IUser } from '../api/types/common'

export const useStore = defineStore('main', {
  // other options...
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      user: null as IUser | null
    }
  }
})
