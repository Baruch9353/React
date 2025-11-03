import apiRequest from './apiRequest.js'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTerrorists = createAsyncThunk(
    "terrorists/fetchTerrorists",
    async () => await apiRequest("terrorists/getAllTerrorists")
);

export const fetchTerroristById = createAsyncThunk(
    "terrorists/fetchTerroristById",
    async (id) => await apiRequest("terrorists/getTerroristById", "POST", id)
);

export const fetchAddTerrorist = createAsyncThunk(
    "terrorists/fetchAddTerrorist",
    async (terrorist) => await apiRequest("terrorists/addTerrorist", "POST", terrorist)
);

export const fetchUpdateTerrorist = createAsyncThunk(
    "terrorists/fetchUpdateTerrorist",
    async (terrorist) => await apiRequest("terrorists/updateTerrorist", "PUT", terrorist)
);

export const fetchRemoveTerrorist = createAsyncThunk(
    "terrorists/fetchRemoveTerrorist",
    async (id) => await apiRequest("terrorists/deleteTerrorist", "DELETE", id)
);
