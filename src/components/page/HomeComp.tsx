import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-[750px] bg-slate-200 mt-[70px] flex justify-center">

      <div className="w-[1000px] h-full bg-zinc-600">
        <div className="w-full h-[100px] bg-[gray] rounded-xl">
          <h1 className="text-center text-[30px] font-bold py-[8px]">SueSue</h1>
          <p className="text-center">
            Save world from Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sunt, laborum.
          </p>
        </div>

        <div className="mt-[20px] bg-[green] w-full h-[300px] rounded-xl">
          <h1 className="text-[25px] font-bold">Recommend</h1>
          <div className="mt-[5px] grid grid-cols-4 h-[240px] w-full ml-[25px]">
            <div className="w-[200px] h-[240px] bg-[red]">
              <div className="w-full h-[180px] bg-emerald-300 flex justify-center">
                <Image
                  src="/BookImg-example.png"
                  width={180}
                  height={50}
                  alt="test"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h1 className="font-bold text-[15px]">One punch</h1>
              <h1>10.00 $</h1>
            </div>
            <div className="w-[200px] h-[240px] bg-[red]">
              <div className="w-full h-[180px] bg-emerald-300 flex justify-center">
                <Image
                  src="/BookImg-example.png"
                  width={180}
                  height={50}
                  alt="test"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h1 className="font-bold text-[15px]">One punch</h1>
              <h1>10.00 $</h1>
            </div>
            <div className="w-[200px] h-[240px] bg-[red]">
              <div className="w-full h-[180px] bg-emerald-300 flex justify-center">
                <Image
                  src="/BookImg-example.png"
                  width={180}
                  height={50}
                  alt="test"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h1 className="font-bold text-[15px]">One punch</h1>
              <h1>10.00 $</h1>
            </div>
            <div className="w-[200px] h-[240px] bg-[red]">
              <div className="w-full h-[180px] bg-emerald-300 flex justify-center">
                <Image
                  src="/BookImg-example.png"
                  width={180}
                  height={50}
                  alt="test"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h1 className="font-bold text-[15px]">One punch</h1>
              <h1>10.00 $</h1>
            </div>
          </div>
        </div>


        <div className="mt-[20px] bg-[green] w-full h-[300px] rounded-xl">
          <h1 className="text-[25px] font-bold">Best Seller</h1>
          <div className="mt-[5px] grid grid-cols-4 h-[240px] w-full ml-[25px]">
            <div className="w-[200px] h-[240px] bg-[red]">
              <div className="w-full h-[180px] bg-emerald-300 flex justify-center">
                <Image
                  src="/BookImg-example.png"
                  width={180}
                  height={50}
                  alt="test"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h1 className="font-bold text-[20px] text-center">Abcd</h1>
            </div>
            <div className="w-[200px] h-[240px] bg-[red]">
              <div className="w-full h-[180px] bg-emerald-300 flex justify-center">
                <Image
                  src="/BookImg-example.png"
                  width={180}
                  height={50}
                  alt="test"
                  style={{ borderRadius: "50px" }}
                />
              </div>
              <h1 className="font-bold text-[20px] text-center">Abcd</h1>
            </div>
            <div className="w-[200px] h-[240px] bg-[red]">
              <div className="w-full h-[180px] bg-emerald-300 flex justify-center">
                <Image
                  src="/BookImg-example.png"
                  width={180}
                  height={50}
                  alt="test"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h1 className="font-bold text-[20px] text-center">Abcd</h1>
            </div>
            <div className="w-[200px] h-[240px] bg-[red]">
              <div className="w-full h-[180px] bg-emerald-300 flex justify-center">
                <Image
                  src="/BookImg-example.png"
                  width={180}
                  height={50}
                  alt="test"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <h1 className="font-bold text-[20px] text-center">Abcd</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
