//api.js文件是对后端进行请求
import axiosInstance from "@/api/index";


const axios = axiosInstance

export const getBooks = () => {
    return axios.get('http://localhost:8000/api/books/')
}

export const postBook = (bookName, bookAuthor) => {
    return axios.post('http://localhost:8000/api/books/', {name: bookName, author: bookAuthor})
}