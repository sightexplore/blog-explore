import Head from 'next/head'
import Layout from '../components/Layout'


export default function Home( ) {

  return (
    <>
    <Layout home>

      <Head>
        <title>Sight Explore | Home</title>
      </Head>

      <h1>INDEX.JS</h1>
      <div className="text-center mt-32 bg-green-500">
                <h1 className="text-4xl">Vision</h1>
                <div className="px-4 sm:px-16 mt-4 text-justify xl:text-2xl xl:px-32 opacity-75 sm:font-light"> 
                    <p className="mb-4">
                        We provide some educational and informative content that would not only help you to excel 
                        in your academic studies but also to boost your conceptual understanding in the long run.
                    </p>
                    <p>
                        We all have learned various concepts in our school life and some which we even pursue for 
                        our higher education. However if our concept is not clear, then we face most of the difficulties
                        to implement our educative skills in real life. With this initiative in our mind, we have 
                        started this team to clear some basic doubts among the students in the field of 
                        Science, Technology and Engineering.
                    </p>
                </div>
            </div>
    </Layout>

    </>
  )
}