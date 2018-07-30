import axios from 'axios';

export const FETCH_DELIVERIES = 'FETCH_DELIVERIES';
export const POST_DELIVERIES = 'POST_DELIVERIES';
export const DELETE_DELIVERIES = 'DELETE_DELIVERIES';
export const EDIT_DELIVERIES = 'EDIT_DELIVERIES';

const url = "http://localhost:8000/api";

export function fetchDeliveries(){
    const request = axios.get(`${url}/deliveries.php`);


    return {
        type: FETCH_DELIVERIES,
        payload: request
    }
};

export function postNewDelivery(delivery, callback){

    let data = {
        date: delivery.deliveryDate,
        name: delivery.deliveryName,
        driver_id:delivery.deliveryDriverID
    }

    axios({
        method: 'POST',
        url: `${url}/deliveries.php`,
        data: data
      })
      .then( () => callback()  )
      .catch(err => console.log(err))
    // console.log("post deliveries", delivery)
    return {
        type: POST_DELIVERIES,
        payload: data
     }
};


export const deleteDelivery = (id, callback) => {
    
    console.log('delete action', id)
    axios({
        method: 'DELETE',
        url: `${url}/deliveries.php?id=${id}`
      })
      .then( () => callback() )
      .catch(err => console.log(err))
   
    return {
        type: DELETE_DELIVERIES,
        payload: id
    }
};


export const editDeliveries = (del, delId, callback) => {
    let data = {
        date: del.date,
        name: del.name,
        driver_id: del.driver_id
    }
    console.log(data)
    axios({
        method: 'PUT',
        url: `${url}/deliveries.php?id=${delId}`,
        data: data
      })
      .then( (response)=>{console.log('res',response), callback()})
      .catch(err => console.log(err))
    return {
        type: EDIT_DELIVERIES,
        payload: { del, delId }
    };
};