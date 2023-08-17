import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApiCarsCatalog, getCarsPerPage } from "api/apiRequests";

export const getCarsCatalogThunk = createAsyncThunk('cars/getAll', ()=>getApiCarsCatalog())
export const getCarsPerPageThunk = createAsyncThunk('cars/perPage', (page)=>getCarsPerPage(page))

