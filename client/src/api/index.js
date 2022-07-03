import axios from "axios";

const url = "http://localhost:4000/posts";

export const fetchPosts = () => axios.get(url, { withCredentials: true });

// export const logout = () => axios.post(url)
