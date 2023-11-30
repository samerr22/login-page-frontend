import React from "react";
import Car from "/image/car.png";
import BAsic from "/image/Basic.jpg";
import Emoji from "/image/emoji.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ghome() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="relative ">
      <img className="absolute w-[30px] ml-[20px] mt-6" src={Emoji} />
      <div className="">
        <div className=" flex items-center justify-center sm:justify-start  ">
          <h1 className="text-[35px] mt-60 absolute font-semibold lg:ml-[430px]  ">
            Login
          </h1>
          <p className="absolute  mt-[333px] text-[18px] text-gray-500 lg:ml-[390px] font-regular ">
            Hey, welcome back! 👋
          </p>

          <input
            className="absolute   mt-[480px] border-2 rounded-lg w-[420px] h-[60px] shadow-sm lg:ml-[270px]"
            type="text"
            placeholder="  Email address"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-300 h-5 w-5 absolute mt-[480px] ml-80 lg:ml-[650px] "
          />
          <input
            className="absolute   mt-[620px] border-2 rounded-lg w-[420px] h-[60px] lg:ml-[270px] shadow-sm"
            type={showPassword ? "text" : "password"}
            placeholder="  Password"
          />

          <FontAwesomeIcon
            icon={faEye}
            className="text-gray-300 h-5 w-5 absolute cursor-pointer mt-[620px] ml-80 lg:ml-[650px]"
            onClick={() => setShowPassword(!showPassword)}
          />
          <button className="bg-blue-600 absolute rounded-lg h-[60px] w-[420px] mt-[780px] hover:opacity-95 text-white font-regular text-[18px] lg:ml-[270px]">
            Login
          </button>

          <input
            className="absolute mt-[950px] mr-[380px] cursor-pointer w-[18px] h-[18px]  lg:ml-[280px] "
            type="checkbox"
          />
          <p className="absolute mt-[948px] mr-[240px]  text-gray-500 text-[15px] font-regular lg:ml-[300px] ">
            Remember me
          </p>
          <p className="absolute mt-[948px] ml-[300px]  text-gray-500 text-[15px] hover:underline cursor-pointer lg:ml-[560px]">
            Frogot Password ?
          </p>

          <p className="absolute mt-[1080px] mr-[80px]  text-gray-500 text-[15px] lg:ml-[325px] ">
            Don't have an account yet?
          </p>
          <p className="absolute mt-[1080px] ml-[155px]  text-gray-500 text-[15px] hover:underline cursor-pointer hover:opacity-60 lg:ml-[510px]">
            Register
          </p>
          <img
            className=" absolute mt-[1750px] rounded-[30px] w-[450px] h-[470px] lg:ml-[850px] lg:mt-[700px] lg:h-[490px] "
            src={Car}
          />
          <h1 className="absolute mt-[1470px] text-[33px] font-semibold text-gray-800 lg:ml-[910px] lg:mt-[390px]">
            All the latest updates
          </h1>
          <h1 className="absolute mt-[1540px] text-[33px] font-semibold text-gray-800 lg:ml-[940px] lg:mt-[450px]">
            from Perspective
          </h1>
          <p className="absolute mt-[1635px] text-xl font-regular text-gray-700 hover:text-sky-700 cursor-pointer lg:ml-[920px] lg:mt-[540px]">
            ✨ Check out our releases here{" "}
          </p>

          <img
            className="absolute w-[310px] h-[200px] mt-[2020px] rounded-xl shadow-xl  lg:ml-[920px] lg:mt-[990px] "
            src={BAsic}
          />
          <p className="absolute mt-[2400px] text-[15] font-regular text-gray-400 lg:ml-[500px] lg:mt-[1500px] ">
            Perspectiv Software SMTM - TOS - Privacy Policies - lmprint
          </p>
          <div className="absolute mt-[2500px] h-[200px] text-white lg:ml-[500px] lg:mt-[1500px]">
            {" "}
            ''
          </div>
        </div>
      </div>
    </div>
  );
}
export default ghome;
