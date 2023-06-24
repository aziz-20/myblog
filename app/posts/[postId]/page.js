import { getSortedPostsData, getPostData } from "@/lib/Post";
import GetFormatedDate from "@/lib/GetFormatedDate";
import { notFound } from "next/navigation";
import Link from "next/link";
export function generateMetadeta({ params: { postId } }) {
    const posts = getSortedPostsData();
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return {
            titel: "Not Found",
        }
    }
    return {

        title: post.title,
    }
}
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map(post => ({
        params: {
            postId: post.id,
        },
    }));

}
export default async function Post({ params: { postId } }) {
    const posts = getSortedPostsData();
    // const postId = postData.id;


    if (!posts.find(post => post.id === postId)) {
        return notFound();

    }

    const { title, date, contentHtml } = await getPostData(postId);
    const Date = GetFormatedDate(date);



    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto ">
            <h1 className="text-3xl mt-2 font-bold text-center text-gray-800">{title}</h1>
            <p className="mt-0">{Date}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p className="mt-0">
                    <Link href="/">
                        ← Back to home
                    </Link>
                </p>
            </article>
        </main>
    );
}