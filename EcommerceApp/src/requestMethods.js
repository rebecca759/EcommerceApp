import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGIxOWI2OGQ3NTJlMTA4ZjU5Njg2MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDE4MzcxMDYsImV4cCI6MTY0MjA5NjMwNn0.Ouc_QufWXQopvKEe28C_qhnEIFKy8-w9PswJJLuQke4"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})