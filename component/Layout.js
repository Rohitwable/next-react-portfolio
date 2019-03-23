import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
Router.onRouteChangeStart = (url) =>{
    console.log(url)
    NProgress.start()
}
Router.onRouteChangeComplete =()=> NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
export default ({ children, title }) => (
    <div className="root">
    <Head>
        <title>Next portfolio</title>
    </Head>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
        </header>
        <h1>{title}</h1>
        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>{`
        .root{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        header{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 1em;
            font-size: 1.2rem;
            background: indigo;
        }
        header a{
            text-decoration: none;
            color: darkgrey;
        }
        header a:hover {
            font-weight: bold;
            color: lightgrey;
        }
        footer{
            padding: 1em;
        }

        `}
        </style>
        <style global jsx>
            {`
        body {
            margin: 0;
            font-weight: 110%;
            background: #f0f0f0;
        }
        
        `}
        </style>
    </div>
)