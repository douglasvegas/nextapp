import React from 'react'
import cowsay from 'cowsay-browser'
import { useRouter } from "next/router";

const Cowsay = () => {

    const {id} = useRouter().query
    return (<div>
        <pre>{cowsay.say({ text: 'hi there, I am callback!!!!' + id})}</pre>
    </div>)
}



export default Cowsay
