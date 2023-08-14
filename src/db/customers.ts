import mongoose from "mongoose";

const DataScheme = new mongoose.Schema({
    username:{
        type: String,
        required: true,        
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    birth:{
        type: Date,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    authentication:{
        password:{
            type: String,
            required: true,
            select: false
        },
        salt:{
            type: String,
            select: false
        },
        sessionToken:{
            type: String,
            select: false
        }
    },
});

export const Model = mongoose.model('Customer', DataScheme);

export const getCustomers = () => Model.find();
export const getCustomerByEmail = (email: string) => Model.findOne({ email });
//export const getCustomerBySessionToken = (sessionToken: string) => Model.findOne({ 'authentication.sessionToken' : sessionToken });
export const getCustomerById = (id: string) => Model.findById(id);
export const createCustomer = (values: Record<string, any>) => new Model(values).save().then((user) => user.toObject());
export const deleteCustomerById = (id: string) => Model.findOneAndDelete({ _id: id });
export const updateCustomerById = (id: string, values: Record<string, any>) => Model.findByIdAndUpdate(id, values);
