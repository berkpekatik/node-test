import express from 'express';

import { deleteCustomerById, getCustomerById, getCustomers } from '../db/customers';

export const getAllCustomers = async (req: express.Request, res: express.Response)=>{
    try {
        const customers = await getCustomers();
        return res.status(200).json(customers);
        
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
};

export const deleteCustomer = async(req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const deletedCustomer = await deleteCustomerById(id);        
        if (!deletedCustomer) {
            return res.sendStatus(404);
        }

        return res.json(deletedCustomer);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateCustomer = async (req:express.Request, res:express.Response) => {
    try {
        const { id } = req.params;
        const { fullname, birth, phone } = req.body;
        if (!fullname || !id ||!birth || !phone) {
            return res.sendStatus(400);
        }

        const customer = await getCustomerById(id);
        
        customer.fullname = fullname;
        customer.birth = birth;
        customer.phone = phone;
        await customer.save();

        return res.status(200).json(customer).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
    
}