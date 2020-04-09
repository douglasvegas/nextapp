import React from 'react'
import cowsay from 'cowsay-browser'
import { useRouter } from "next/router";
import fetch  from 'isomorphic-unfetch';

const Cowsay = ({stars, json}) => {
    const {id} = useRouter().query
    return (
        <div>
            <pre>{cowsay.say({ text: 'hi there, I am callback!!!!'})}</pre>
            <div>next get {stars} stars</div>
            {/*<div className={'list'}>*/}
            {/*    {*/}
            {/*        json.map(item => {*/}
            {/*            return (*/}
            {/*                <div key={item.id}>*/}
            {/*                    <p>{item.title}</p>*/}
            {/*                    <div dangerouslySetInnerHTML={{__html: item.content}}></div>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}

            <style jsx>
                {`
                .list {
                    margin-left:20%;
                    width:60%;
                    background: #ccc;
                    text-align:center;
                }

                    `}
            </style>
        </div>
    )
}

Cowsay.getInitialProps = async ({req}) => {
    // let url = 'http://localhost:8080/api/v1/posts';
    // url = 'http://api.aiglab.com/api/v1/posts';
    // const res = await fetch(url)
    // const json = await res.json()
    // console.log(json)
    // return {stars: 1, json: json.response}
  return { stars: 1}
}


export default Cowsay
