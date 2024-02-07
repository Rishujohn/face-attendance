"use client";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen w-screen">
      {/* Background */}
      <div className="flex justify-between w-full">
        <div className="w-1/2 relative flex justify-center items-center flex-col">
          <Image
            className="w-32 object-cover mb-2"
            src={"/assets/favicon.png"}
            alt=""
            height={1000}
            width={1000}
          />
          <Image
            className="w-full object-cover"
            src={"/assets/logo.png"}
            alt=""
            height={1000}
            width={1000}
          />
          <Image
            className="w-full object-cover"
            src={"/assets/name.png"}
            alt=""
            height={1000}
            width={1000}
          />
          <div className="bg-white bg-opacity-5 backdrop-blur absolute top-0 left-0 h-screen w-screen"></div>
        </div>
        <div className="w-1/2"></div>
      </div>

      {/* Main */}
      <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
        <div className="bg-white h-[80vh] w-[80vw] flex justify-between shadow-md rounded-lg">
          <div className="w-1/2 h-fit">
            <h1 className="text-2xl font-body text-center font-bold pt-4">LOGIN</h1>
            <p className="text-[12px] text-gray-400 font-light text-center">
              Enter the information that you registered
            </p>

            {/* Crendentials */}
            <form className="px-20 mt-12 text-lg">
              <div>
                <label htmlFor="">Email: </label> <br />
                <input
                  type="email"
                  placeholder="enter your email *"
                  required
                  className="border border-grey-400 rounded-md placeholder:text-[10px] px-2 h-10 w-80"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="">Password: </label> <br />
                <input
                  type="password"
                  placeholder="enter your password *"
                  required
                  className="border border-grey-400 rounded-md placeholder:text-[10px] px-2 h-10 w-80"
                />
              </div>

              <div className="flex justify-between items-center text-[12px] mt-6">
                <div className="flex items-center justify-center gap-2">
                  <input type="checkbox" name="rememberMe" id="" />
                  <label htmlFor="rememberMe">remember me</label>
                </div>

                <div className="text-violet-500 underline">
                  Forget password ?
                </div>
              </div>

              <button className=" bg-fuchsia-950 mt-8 p-2 w-full rounded-md text-white tracking-wider font-bold">
                Login
              </button>

              <div className="h-[1px] w-full bg-black bg-opacity-5 mt-4"></div>

              <div className=" text-[12px] text-center mt-4">
                <p>
                  Don't have an account ?{" "}
                  <Link href={"/"} className="text-violet-500 hover:underline">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* ------------ */}
          <div className="w-1/2 flex justify-center items-center flex-col">
            <Image
              className="w-32 object-cover mb-2"
              src={"/assets/favicon.png"}
              alt=""
              height={1000}
              width={1000}
            />
            <Image
              className="w-96 object-cover"
              src={"/assets/logo.png"}
              alt=""
              height={1000}
              width={1000}
            />
            <Image
              className="w-96 object-cover"
              src={"/assets/name.png"}
              alt=""
              height={1000}
              width={1000}
            />

            <div className="text-xl whitespace-nowrap">Face recogonition attendance system</div>
          </div>
        </div>
      </div>
    </div>
  );
}
