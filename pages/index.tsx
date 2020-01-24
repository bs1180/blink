import * as React from "react";
import { NextPage } from "next";
import Girl from "../components/Girl";
import Logo from "../components/Logo";

const IndexPage: NextPage = () => {
  return (
    <div
      className="bg-blue-200 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient( 109.6deg,  rgba(31,179,237,1) 11.2%, rgba(17,106,197,1) 91.1% )"
      }}
    >
      <div
        className="bg-white mx-auto w-full max-w-xl overflow-scroll border-solid border-black border-4 flex flex-col p-16 items-center"
        style={{ boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" }}
      >
        <Logo className="w-64" />
        <div>Coming soon!</div>
        <div>Join our mailing list...</div>
      </div>

      <Girl className="absolute bottom-0 left-0" />
    </div>
  );
};

export default IndexPage;
