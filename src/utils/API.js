import axios from "axios";

//method that will be used for getting list of employees from random user api
export default {
    getEmployeeList: function() {
        return axios.get('https://randomuser.me/api/?results=25')
    },
};