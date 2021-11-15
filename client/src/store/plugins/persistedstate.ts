import { PiniaPluginContext } from 'pinia'

export default function PersistedstatePiniaPlugin (options: {
  key?: string
} = {}) {
  return ({ store }: PiniaPluginContext) => {
    store.$state = JSON.parse(window.localStorage.getItem('store') || 'null')
    store.$subscribe((mutation, state) => {
      window.localStorage.setItem(options.key || 'store', JSON.stringify(state))
    })
  }
}
