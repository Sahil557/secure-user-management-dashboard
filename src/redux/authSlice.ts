import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../services/api";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  status: "idle",
  error: null,
};

// Async thunks with proper typing
export const login = createAsyncThunk<
  any, // Type of the returned data (response)
  { email: string; password: string }, // Type of the argument (payload)
  { rejectValue: string } // Type of the reject value (error message)
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await loginUser(email, password);
    return response;
  } catch (error) {
    return rejectWithValue("Login failed."); // Provide a custom error message
  }
});

export const register = createAsyncThunk<
  any,
  { name: string; job: string },
  { rejectValue: string }
>("auth/register", async ({ name, job }, { rejectWithValue }) => {
  try {
    const response = await registerUser(name, job);
    return response;
  } catch (error) {
    return rejectWithValue("Registration failed."); // Provide a custom error message
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    resetStatus(state) {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Login failed";
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Registration failed";
      });
  },
});

export const { logout, resetStatus } = authSlice.actions;

export default authSlice.reducer;
