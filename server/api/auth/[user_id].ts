import axios from 'axios';

export default defineEventHandler(async (event) => {
    const { user_id } : any = event.context.params;

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
      
      if (!response.data) {
        throw createError({
          statusCode: 404,
          statusMessage: 'User Not Found',
        });
      }
  
      return response.data;
  
    } catch (error: any) {
      if (error.response) {
        return createError({
          statusCode: error.response.status,
          statusMessage: error.response.statusText,
        });
      } else {
        return createError({
          statusCode: 500,
          statusMessage: 'Internal Server Error',
        });
      }
    }
});
