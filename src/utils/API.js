import axios from "axios";

//method that will be used for getting list of employees from random user api
export const getEmployeeList = () => {
        return axios.get('https://randomuser.me/api/?results=25');
    }
