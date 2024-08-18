import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global/'
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const response =
            await axios.get('contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error!');
    }
});
export const fetchNewContact = createAsyncThunk('contacts/fetchNewContact', async (newContact, thunkAPI) => {
    try {
        const response =
            await axios.post('contacts', newContact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error!');
    }
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const response =
            await axios.delete(`contacts/${id}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error!');
    }
});


