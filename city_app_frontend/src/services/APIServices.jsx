import { throwError } from "rxjs";

export async function fetchCityAppData() {
    let url = `${process.env.REACT_APP_API_URL}/city-app/?page=1`;
    return fetch(url, {
        method: "GET",
        headers:{
          'Content-Type': "application/json",
        }
      })
      .then(response=>{
        if (!response.ok) {
          console.log("HTTP error, status = " + response.status);
        }
        return response.json()
      })
  }


export async function setCityAppData(data){
  let url = `${process.env.REACT_APP_API_URL}/city-app/`;
  return fetch(url, {
    method: "POST",
    headers:{
      'Content-Type': "application/json",
    },
    body:JSON.stringify(data)
  }).then(response=>{
    console.log("response =>",response);
    if (!response.ok) {
      throwError("No data")
    }
    return response.json()
  })
}


export async function updateCityAppData(id, data){
    let url = `${process.env.REACT_APP_API_URL}/city-app/${id}/`;
    return fetch(url, {
        method: "PUT",
        headers:{
          'Content-Type': "application/json",
        },
        body:JSON.stringify(data)
      }).then(response=>{
        console.log("response =>",response);
        if (!response.ok) {
          throwError("No data")
        }
        return response.json()
      })
};


export async function deleteCityAppData(id, data){
    let url = `${process.env.REACT_APP_API_URL}/city-app/${id}/`;
    return fetch(url, {
        method: "DELETE",
        headers:{
          'Content-Type': "application/json",
        },
        body:JSON.stringify(data)
      }).then(response=>{
        console.log("response =>",response);
        if (!response.ok) {
          throwError("No data")
        }
        return response.json()
      })
};


