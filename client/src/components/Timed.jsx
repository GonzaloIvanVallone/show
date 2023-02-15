import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCadenas, postCadena } from '../redux/actions';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//import Style from './Styles/Dashboard.module.css'

export default function Timed(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [counter, setCounter] = useState(20);
    const [checked, setChecked] = useState(true);
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
        counter > 0 && checked && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0){
            dispatch(getCadenas());
            setCounter(20);
        }
    }, [counter, checked, dispatch ])

    return(
        <div>
            <div>
                <button onClick={handleClickBack}>Go Back</button>
                <label><input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>Refreshing in {counter}...</label>
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