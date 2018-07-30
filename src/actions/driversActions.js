import axios from 'axios';

export const FETCH_DRIVERS = 'FETCH_DRIVERS';

const url = "http://localhost:8000/api";

export function fetchDrivers(){
    const request = axios.get(`${url}/drivers.php`);
    // returns promise as payload
    console.log("fetching drivers")
    return {
        type: FETCH_DRIVERS,
        payload: request
    }
};
