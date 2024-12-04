export default defineNuxtRouteMiddleware((to, from) => {
  const userId = useCookie('user_id').value;

  if (userId) {
    return navigateTo('/dashboard');
  }
});