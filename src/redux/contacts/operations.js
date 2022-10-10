import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
      return res.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", text);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      console.log(res.data)
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);