import { configureStore } from '@reduxjs/toolkit'
import todoRed from "../features/todo/todoSlice.js"

export const store = configureStore({
    reducer: todoRed,
});