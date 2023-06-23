import Post from "./component/Post"
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <h1 className="text-6xl font-bold text-center text-gray-800 my-5">Hi <span className="text-blue-500">Ali</span></h1>
      <Post />
    </main>
  )
}
