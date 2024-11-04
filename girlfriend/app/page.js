import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-red-500 justify-center items-center relative">
      <div className="h-screen w-screen flex bg-red justify-center items-center">
        <div className="text-center">
          <h1 className="text-8xl p-2 m-4">Will you be my girlfriend?</h1>
          <div className="text-3xl d-flex justify-center" role="group">
          <Link className="border-4 p-2 m-4 me-20" href="/yes">YES :)</Link>
          <Link className="border-4 p-2 m-4" href="/no">NO :(</Link>
          </div>
        </div>
      </div>
    </div>
  );
}