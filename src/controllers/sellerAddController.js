import axios from 'axios';

const url = "http://localhost:3060/selleradd";


export function getAllSellers(){

    return axios 
        .get(url)
        .then((res)=>{
            return res.data;
        })
        .catch((err)=>{
            throw err;
        })
}


export function getSeller(id){

    return axios
        .get(`${url}/${id}`)
        .then((res)=>{
            return res.data;
        })
        .catch((err) => {
            throw err;
        })
}

export function addSeller(seller){

        return axios
            .post(`${url}`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                throw err;
            })
}

export function deleteSeller(){

        return axios
        .delete(`${url}/${id}`)
        .then((res)=>{
            return res.data;
        })
        .catch((err) => {
            throw err;
        })

}