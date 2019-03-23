import Link from 'next/link'
import Layout from '../component/Layout'
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'


export default class About extends Component {
    // state = {
    //     user: null
    // }
    //Server rendered react app with async await

    static async getInitialProps() {

        const res = await fetch("https://api.github.com/users/Rohitwable")
        const data = await res.json()
        return { user: data }
    }



    //Server rendered react app
    //  static getInitialProps(){

    //         fetch("https://api.github.com/users/Rohitwable")
    //             .then(res => res.json())
    //             .then(data => {
    //               console.log(data)
    //             })
    //             return {user: 'user'}
    //     }



    //Client rendered react app
    // componentDidMount() {
    //     fetch("https://api.github.com/users/Rohitwable")
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({ user: data })
    //         })
    // }
    render() {
        const { user } =  this.props
        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} height='200px'/>
                <p>{user.bio}</p>
                <p>{user.url}</p>

                <Link href="/">
                    <a>Go to Home</a>
                </Link>
                <p>A javascript programmer</p>
                <img src="./static/logo.jpg" height="200px" alt="Javascript logo" />
            </Layout>
        )
    }
}
