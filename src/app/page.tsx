


export default function Home() {


  return (
    <div className="w-screen h-screen bg-red-700 flex items-center justify-center" id="container">
      <div className="bg-blue-700 h-5/6 w-4/5 rounded-xl">
        <div className="font-mine flex justify-center   items-center m-5 text-center ">
          <div className=" w-1/3 p-8 bg-black rounded-lg">
            <h1 className="text-5xl  animate-pulse">TIC TAC TOE</h1>
          </div>
        </div>

        <div className="m-3 h-3/4 flex items-center justify-center rounded-xl bg-green-500">
          <div>
            <input type="text" className="bg-black" />
            <button className="bg-amber-700 w-2/3 h-2/3">sds</button>
          </div>
        </div>

      </div>

    </div>
  );
}