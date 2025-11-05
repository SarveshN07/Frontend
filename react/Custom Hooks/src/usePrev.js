import { useState,useRef, useEffect } from "react";

export function useRef(value){

    const ref = useRef();

    useEffect(()=>{
        ref.current = value;
    },[value]);

    return ref.current;


}