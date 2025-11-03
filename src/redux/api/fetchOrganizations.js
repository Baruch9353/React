import  apiRequest from './apiRequest.js'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrganizations = createAsyncThunk(
    "organizations/fetchOrganizations",
    async () => await apiRequest("organizations/getAllOrganizations")
);

export const fetchOrganizationById = createAsyncThunk(
    "organizations/fetchOrganizationById",
    async (id) => await apiRequest("organizations/getOrganizationById", "POST", id)
);

export const fetchAddOrganization = createAsyncThunk(
    "organizations/fetchAddOrganization",
    async (organization) => await apiRequest("organizations/addOrganization", "POST", organization)
);

export const fetchUpdateOrganization = createAsyncThunk(
    "organizations/fetchUpdateOrganization",
    async (organization) => await apiRequest("organizations/updateOrganization", "PUT", organization)
);

export const fetchRemoveOrganization = createAsyncThunk(
    "organizations/fetchRemoveOrganization",
    async (id) => await apiRequest("organizations/deleteOrganization", "DELETE", id)
);
