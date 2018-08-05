// import axios from 'axios';
import fetch from "isomorphic-fetch";




export const BASE_URL = '../../mocks/events.json';



  export const fetchTableData = () => {
    // const registerDataObj = {
    //   username: registerData.emailAddress,
    //   // first_name: registerData.firstName,
    //   // last_name: registerData.lastName,
    //   email: registerData.emailAddress,
    //   password1: registerData.password,
    //   password2: registerData.confirmPassword,
    // };
    return fetch(BASE_URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(response => response.json());
  };