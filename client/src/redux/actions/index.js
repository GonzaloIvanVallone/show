import axios from 'axios';
import Swal from "sweetalert2";
export const GET_CADENAS = "GET_CADENAS";

const cadena_route = 'http://localhost:3001/string';

export function postCadena(payload){
    return async function(){
        try{
            //console.log("en actions la cadena es: ", payload)
            await axios.post(cadena_route, payload);
        }catch(error){
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: "error",
                confirmButtonText: "Continue",
            });
        }
    }
}

export function getCadenas(){
    return async function(dispatch){
        try{
            let aux = await axios.get(cadena_route);
            return dispatch({type: GET_CADENAS, payload: aux.data});
        }catch(error){
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: "error",
                confirmButtonText: "Continue",
            });
        }
    }
}