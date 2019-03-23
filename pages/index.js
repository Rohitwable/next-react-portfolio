import Link from 'next/link'
import Layout from '../component/Layout'
const Index = () => (
    <Layout title="Home">
        <Link href="/about">
            <a>Go to about</a>
        </Link>
        <p>Welcome to the home page</p>
    </Layout>
)

export default Index