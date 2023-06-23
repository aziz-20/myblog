import { getSortedPostsData } from "@/lib/Post"
import ListedItem from "./ListedItem"
export default function Post() {
    const post = getSortedPostsData()
    return (
        <div>
            <section className=" mt-6 mx-auto  max-w-2xl text-gray-600 body-font">
                <h2 className="text-4xl font-bold mb-2">Blog</h2>
                <ul className="W-full">
                    {post.map(post =>(
                        <ListedItem key={post.id} post={post} />
                    
                    ))}
                </ul>
               
               </section> 
        </div>
    )
}