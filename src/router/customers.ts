import express from "express";

import { deleteCustomer, getAllCustomers, updateCustomer } from "../controller/customers";
import { isAuthentication } from "../middlewares";

export default (router: express.Router) => {
    router.get('/customers', isAuthentication, getAllCustomers);
    router.delete('/customers/:id', isAuthentication, deleteCustomer);
    router.patch('/customers/:id', isAuthentication, updateCustomer);
}