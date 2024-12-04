export default defineNuxtRouteMiddleware((to, from) => {
    const userId = useCookie<string>('user_id').value; 
  
    if (!userId || parseInt(userId) < 5) {
      return navigateTo('/dashboard/not-vip');
    }
  });