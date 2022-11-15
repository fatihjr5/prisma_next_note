import type { GetStaticProps, } from "next";
import Layout from "../component/Layout";
import Post, { PostProps } from "../component/Post";
export const getStaticProps: GetStaticProps = async () => {
  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content: "lorem ipsum sit dolor amet adipiscing",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ]
  return { 
    props: { feed }, 
    revalidate: 10 
  }
}

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        {props.feed.map((post) => (
          <div key={post.id} className="bg-white drop-shadow-md rounded-lg hover:scale-105 duration-200 hover:drop-shadow-lg">
            <Post post={post} />
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default Blog