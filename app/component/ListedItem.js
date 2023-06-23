import GetFormatedDate from "@/lib/GetFormatedDate";
import Link from "next/link";
export default function ListedItem({ post }) {
    const { id, title, date } = post;
    const formatedDate = GetFormatedDate(date);
    return (
        <li className="mb-4 text-2xl"key={id}>
            <Link className="underline" href={`/posts/${id}`}>
                {title}
                </Link>
                <br />
                <small className="text-gray-500">{formatedDate}</small>
         </li>   

    );

}
    