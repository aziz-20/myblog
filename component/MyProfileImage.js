import Image from "next/image";
export default function MyProfileImage() {
    return (
        <section className="w-full mx-auto"> 
            <Image
                src="/images/MyImage.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                priority
                className="rounded-full mx-auto mt-8 drop-shadow-xl z-10 border-2 border-black dark:border-slate-600 drop-shadow-xl "
            />
        </section>
        
    );
}