import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Planet = () => {
    const [planet,setPlanet]=useState()

    const nav = useNavigate()

    const {id} = useParams()
    console.log(id)



useEffect(() => {
    axios.get('')
    .then((res) => {
        console.log(res.results.data)
        setPlanet(res.results.data)
    })
    .catch((err) => {
        console.log(err)
    }
}


}


