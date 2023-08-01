import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../shared/utils/axiosConfig";

export const postPet = createAsyncThunk(
  "pets/postPet",
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post("/pets/add", pet);
      //   notifyCreacteNewContact();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosPrivate.delete(`/pets/delete/${id}`);
      //   notifyDeleteContact();
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
