// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    user: null,
  }),
  actions: {
    async fetchUser() {
      this.user = 1;
    },
    async signUp(user) {
      this.user = user;
    },
    async Login(user) {
      this.user = user;
    },
  },
})
