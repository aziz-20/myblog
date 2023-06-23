import Post from "./component/Post"
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <h1 className="text-6xl font-bold text-center text-gray-800">hi, i'm <span className="text-blue-500">joseph</span></h1>
      <Post />
    </main>
  )
}
