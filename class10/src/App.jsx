import { useState } from 'react'
import './App.css'
import { use } from 'react'

function App() {
// Redux Toolkit – Easy Steps
// 🔹 Basic Setup
// 1.	Create a folder inside src → name it store
// 2.	Inside store, create a file → store.js
// 3.	Import configureStore from @reduxjs/toolkit
// 4.	Create the store:
// o	configureStore() takes an object
// o	This object has a reducer property
// o	reducer is also an object that contains all reducers of your app
// 5.	Export the store.
// ________________________________________
// 🔹 Create Slice
// 6.	Inside store folder, create a file → slice.js
// 7.	Import createSlice from @reduxjs/toolkit
// 8.	createSlice() takes an object with 3 properties:
// o	name → slice name
// o	initialState → starting state
// o	reducers → functions to update state
// 9.	Export the slice.
// 10.	Import the slice reducer in store.js and add it inside configureStore → reducer object.
// ________________________________________
// 🔹 Connect Store to App
// 11.	Import the store in main.jsx
// 12.	Wrap <App /> with <Provider />
// 13.	Pass store as a prop to Provider
// ________________________________________
// 🔹 Using Store in Components
// useSelector
// •	Used to get data from store
// •	Takes a function
// •	That function receives state
// •	Returns the required data
// useDispatch
// •	Used to update data
// •	Returns a function
// •	We use it to dispatch actions
// ________________________________________
// Redux Toolkit API (RTK Query)
// 1.	Inside slice file, import:
// createApi from '@reduxjs/toolkit/query/react'
// 2.	Call createApi() and pass an object containing:
// o	reducerPath → API name
// o	baseQuery → use fetchBaseQuery() and pass baseUrl
// o	endpoints → function with builder parameter
// 3.	Inside endpoints:
// o	Use builder.query()
// o	Pass an object with query property
// o	query is a function that returns the API endpoint URL
// 4.	createApi() automatically generates a custom hook
// o	Use that hook inside components to fetch data.
// ________________________________________
// createAsyncThunk
// •	Used for async actions
// •	Import from Redux Toolkit
// It takes:
// 1.	A string → action name
// 2.	A function → async function (returns a promise)
// What happens automatically:
// •	If promise resolves →
// Action type: "actionName/fulfilled"
// Payload: result data
// •	If promise rejects →
// Action type: "actionName/rejected"
// Payload: error message
________________________________________
// 🔹 createAsyncThunk kya karta hai?
// Jab hum createAsyncThunk use karte hain, to yeh automatically 3 action types generate karta hai:
// 1.	"actionName/pending" → jab request start hoti hai
// 2.	"actionName/fulfilled" → jab request successful hoti hai
// 3.	"actionName/rejected" → jab request fail ho jati hai
// ________________________________________
// 🔹 extraReducers ka kaam
// extraReducers hume in teen states ko handle karne mein help karta hai:
// •	🟡 pending → loading true kar dete hain
// •	🟢 fulfilled → data state mein save kar dete hain
// •	🔴 rejected → error state mein save kar dete hain
// Is tarah hum async operation ke status ke hisaab se apna state update kar sakte hain.
// ________________________________________
// ✅ Simple Flow
// 1.	createAsyncThunk → async action banata hai
// 2.	3 action types auto generate karta hai
// 3.	extraReducers → un actions ko handle karta hai
// 4.	State ko pending / success / error ke hisaab se update karta hai




  return (
    <>
     
    </>
  )
}

export default App
