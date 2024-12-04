import { defineStore } from 'pinia';
import { useCookie } from 'nuxt/app';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: {},
  }),
  actions: {
    setUserData(data: any) {
      this.userData = data;
      localStorage.setItem('userData', JSON.stringify(data));
    },
    clearUserData() {
      this.userData = {};
      localStorage.removeItem('userData');
    },
    async login(user_id: string) {
      return new Promise<void>(async (resolve, reject) => {
        try {
          const response = await axios.get(`/api/auth/${user_id}`);
          
          if (response.status === 200) {
            useCookie('user_id').value = user_id;
            this.setUserData(response.data);

            resolve(response.data);
          } else {
            reject('Invalid user');
          }
        } catch (error: any) {
          console.error('Error response:', error.response);
          reject(error.response || 'Login failed');
        }
      });
    },
  },
});