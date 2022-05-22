import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from './userService';

const initialState = {
   users: [],
   user: {},
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: '',
   addUserSuccess: false,
   deleteUserSuccess: false,
   singleUserSuccess: false,
   updateUserSuccess: false
}

export const addUser = createAsyncThunk(
   'user/addUser',
   async (user, thunkAPI) => {
      try {
         const token = thunkAPI.getState().auth.user.token
         return await userService.addUser(user, token)
      } catch (error) {
         const message = error.response.data.message
         return thunkAPI.rejectWithValue(message)
      }
   }
)

export const getUsers = createAsyncThunk(
   'user/getUsers',
   async(_, thunkAPI) => {
      try {
         const token = thunkAPI.getState().auth.user.token
         return await userService.getUsers(token)
      } catch (error) {
         const message = error.response.data.message
         return thunkAPI.rejectWithValue(message)
      }
   }
)

export const getUser = createAsyncThunk(
   'user/getUser',
   async (userId, thunkAPI) => {
      try {
         const token = thunkAPI.getState().auth.user.token
         return await userService.getUser(userId, token)
      } catch (error) {
         const message = error.response.data.message
         return thunkAPI.rejectWithValue(message)
      }
   }
)

export const updateUser = createAsyncThunk(
   'user/upadateUser',
   async (user, thunkAPI) => {
      try {
         const token = thunkAPI.getState().auth.user.token
         return await userService.upadateUser(user, token)
      } catch (error) {
         const message = error.response.data.message
         return thunkAPI.rejectWithValue(message)
      }
   }
)

export const deleteUser = createAsyncThunk(
   'user/deleteUser',
   async(userId, thunkAPI) => {
      try {
         const token = thunkAPI.getState().auth.user.token
         return await userService.deleteUser(userId, token)
      } catch (error) {
         const message = error.response.data.message
         return thunkAPI.rejectWithValue(message)
      }
   }
)

export const userSlice = createSlice({
   name:'user',
   initialState,
   reducers: {
      reset: (state) => {
         state.isLoading = false
         state.users = []
         state.user = {}
         state.isSuccess = false
         state.message = ''
         state.addUserSuccess = false
         state.deleteUserSuccess = false
         state.singleUserSuccess = false
         state.updateUserSuccess = false

      },
   },
   extraReducers: (bulder) => {
      bulder
      //add user
      .addCase(addUser.pending, (state) => {
         state.isLoading = true
      })
      .addCase(addUser.fulfilled, (state, action) => {
         state.isLoading = false
         state.addUserSuccess = true
      })
      .addCase(addUser.rejected, (state, action) => {
         state.isLoading = false
         state.isError = true
         state.message = action.payload
      })

      //get users
      .addCase(getUsers.pending, (state) => {
         state.isLoading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
         state.isLoading = false
         state.isSuccess  = true
         state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
         state.isLoading = false
         state.isError = true
         state.message = action.payload
      })

      //get user
      .addCase(getUser.pending, (state) => {
         state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
         state.isLoading = false
         state.singleUserSuccess  = true
         state.user = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
         state.isLoading = false
         state.isError = true
         state.message = action.payload
      })

      //update user
      .addCase(updateUser.pending, (state) => {
         state.isLoading = true
       })
       .addCase(updateUser.fulfilled, (state, action) => {
         state.isLoading = false
         state.updateUserSuccess = true
       })
       .addCase(updateUser.rejected, (state, action) => {
         state.isLoading = false
         state.isError = true
         state.message = action.payload
       })

      //delete user
      .addCase(deleteUser.pending, (state) => {
         state.isLoading = true
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
         state.isLoading = false
         state.deleteUserSuccess = true
      })
      .addCase(deleteUser.rejected, (state, action) => {
         state.isLoading = false
         state.isError = true
         state.message = action.payload
      })
   },
})

export const {reset} = userSlice.actions
export default userSlice.reducer