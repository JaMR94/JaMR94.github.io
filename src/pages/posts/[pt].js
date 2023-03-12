import { useRouter } from 'next/router'

const Post = ({posts}) => {
    const router = useRouter()
    return (
        posts.map((post) => {
          return(
            <h2 key={post.id}>{post.title}</h2>
          )
        })
    )
}

export async function getStaticPaths() {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    const paths = posts.map((post) => ({
      params: { pt: post.id.toString() },
    }))

    return { paths, fallback: false }
  }

export async function getStaticProps(context) {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }
  
export default Post