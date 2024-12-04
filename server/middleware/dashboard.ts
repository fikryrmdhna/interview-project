import { defineEventHandler, getCookie, deleteCookie, sendRedirect, getRequestURL } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {

  const userId = getCookie(event, 'user_id');
  const currentUrl = getRequestURL(event);
  const acceptHeader = event.node.req.headers['accept'] || '';

  // Skip API requests, karena jika tidak maka request API akan 302 redirect
  if (acceptHeader.includes('application/json')) {
    return;
  }

  if (currentUrl.pathname !== '/') {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      
      if (!response.data) {
        throw new Error('User not found');
      }

      return;

    } catch (error: any) {
      console.error('Error validating user:', error.message);

      deleteCookie(event, 'user_id');

      return sendRedirect(event, '/');
    }
  }
});
