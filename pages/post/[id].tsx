import React from "react"
import { GetServerSideProps } from "next"
import { PostProps } from "../../component/Post"
import PostLayout from "../../component/PostLayout"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = {
    id: "1",
    title: "Prisma is the perfect ORM for Next.js",
    content: "lorem ipsum sit dolor amet",
    published: false,
    author: {
      name: "Nikolas Burk",
      email: "burk@prisma.io",
    },
  }
  return {
    props: post,
  }
}

const Post: React.FC<PostProps> = (props) => {
  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  return (
    <PostLayout>
      <div>
        <div className="flex flex-col mb-4">
          <h2 className="text-2xl lg:text-4xl font-bold">{title}</h2>
          <p>By {props?.author?.name || "Unknown author"}</p>
        </div>
        <p className="text-base font-normal text-gray-700">{props.content}</p>
      </div>
    </PostLayout>
  )
}

export default Post
