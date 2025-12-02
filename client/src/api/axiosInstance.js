import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2921",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Silently handle 401 for check-auth endpoint since it's expected when not authenticated
    if (
      error.response?.status === 401 &&
      error.config?.url?.includes("/auth/check-auth")
    ) {
      // Return the error without logging to console
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
