import Link from 'next/link'
import Layout from '../component/Layout'

const About = () => (
    <Layout title="About">
        <Link href="/">
        <a>Go to Home</a>
        </Link>
        <p>A javascript programmer</p>
        <img src="./static/logo.jpg" height="200px" alt="Javascript logo" />
    </Layout>

)

export default About