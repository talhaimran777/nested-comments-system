import Comments from "./components/comments";
import fakeComments from "./data/comments";

export default function App() {
  return (
    <div className="bg-slate-200 flex justify-center items-center h-screen">
      <Comments comments={fakeComments} />
    </div>
  );
}
