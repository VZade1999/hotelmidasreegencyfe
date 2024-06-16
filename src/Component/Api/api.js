import axios from "axios";

// const API_URL = "https://hotelmidasreegency.railway.internal";
const API_URL = "https://hotelmidasreegency-production.up.railway.app";

export const PostApi = async (path, payload) => {
  try {
    // Create a new instance of axios
    const instance = axios.create();
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
  }
  
  // Usage
    if (path === "/roombooking" || path ==="/roombooked" || path ==='/validation') {
      const response = await instance.post(`${API_URL}${path}`, payload, {
        headers: {
          'Authorization': `Bearer ${getCookie('Bearer')}`,
          "Content-Type": "application/json",
        },
      });
      return response
    } else {
      const response = await instance.post(`${API_URL}${path}`, payload);

      return response.data;
    }

    // Make the POST request using the axios instance
  } catch (error) {
    console.error("Error:", error);
    return error; // Rethrow error to handle it in the caller function
  }
};
