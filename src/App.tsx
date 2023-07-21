import { Editor } from "./components/Editor";


export default function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-50 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-800">
      <div className="bg-zinc-900 w-full mx-auto rounded-xl min-h-[900px] shadow-md border-black/20 overflow-hidden grid grid-cols-[14rem_1fr]">
        <aside className="bg-zinc-800 border-r-purple-900 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
