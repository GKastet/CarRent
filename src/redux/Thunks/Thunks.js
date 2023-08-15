import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApiCarsCatalog } from "api/apiRequests";

export const getCarsCatalogThunk = createAsyncThunk('cars/getAll', ()=>getApiCarsCatalog())