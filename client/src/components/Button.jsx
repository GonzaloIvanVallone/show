import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCadenas, postCadena } from '../redux/actions';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Instant(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [chain, setChain] = useState({
        content:"",
    });
    const allStrings = useSelector((state) => state.cadenas)

    function handleClick(e){
        e.preventDefault();
        if(chain.content !== ""){
            dispatch(postCadena(chain));
            setChain({
                content:""
            })
            dispatch(getCadenas());
        }else{
            Swal.fire({
                title: "Text required",
                icon: "error",
                confirmButtonText: "Continue",
            });
        }
    }

    function handleChange(e){
        setChain({
           ...chain,
           [e.target.name]: e.target.value
        })
    }

    function handleClickBack() {
        navigate('/');
    }

    useEffect(() => {
        dispatch(getCadenas());
    }, [ dispatch ])

    return(
        <div>
            <div>
                <button onClick={handleClickBack}>Go Back</button>
            </div>
            <div>
                <label><input  type="text" name='content' value={chain.content} onChange={handleChange}></input></label>
                <label><button type='submit' id="addchain" onClick={handleClick}>Add new string</button></label>
            </div>
            <div>
                {allStrings?.map((e,i)=> {return <div key={i}>{e}</div>})}
            </div>
        </div>
    )
}