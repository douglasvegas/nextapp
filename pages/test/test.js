import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
// import cowsay from 'cowsay-browser'
// import { useRouter } from "next/router";
// import fetch  from 'isomorphic-unfetch'

const MyButton = React.forwardRef(({onClick, href}, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} >
            &gt; Test
        </a>
    )
})

// Router.beforePopState(({url , as, options}) => {
//     if(as !== '/' && as !== '/test/') {
//         window.location.href = as;
//         return false
//     }
//     return true
// })

const handleRouteChange = url => {
    console.log('App is changing to: ', url)
}

Router.events.on('routeChangeStart', handleRouteChange)


class Test extends React.Component{
    static async getInitialProps ({req}){
        let ua = req ? req.headers['user-agent'] : navigator.userAgent
        return {ua}

}
    render() {
        return (
            <div>
                <div>{this.props.ua}</div>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>home</a>
                        </Link>
                        <Link href='/test/index'>
                            <MyButton/>
                        </Link>
                        <Link href='/test/test'>
                            <a>test/test</a>
                        </Link>
                    </li>
                </ul>
                <div>Click<span onClick={() => Router.push('/test/')}>here</span>to read more</div>
            </div>
        )
    }
}


export default Test
