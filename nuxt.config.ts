// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Interview Project',
    }
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/axios.ts'],
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_API_BASE_URL: 'http://localhost:3000',
    },
  },
})
