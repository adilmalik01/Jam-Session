import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-[90vh] w-full flex justify-center  items-center">
        <h1 className="text-[25px] font-medium ">HOME PAGE</h1>
      </div>
    </main>
  );
}
