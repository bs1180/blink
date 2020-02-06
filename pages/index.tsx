import React, { useState } from "react";
import { NextPage } from "next";
import Girl from "../components/Girl";
import Logo from "../components/Logo";
import SignupForm from "../components/SignupForm";
import Head from "next/head";

const EnglishContent = () => (
  <>
    {" "}
    <p>Dear improvisers!</p>
    <p className="pt-6">
      We're organising an exciting new improv festival to be held <strong>12 – 14 June 2020</strong> at the{" "}
      <a href="https://spektakel.wien/" className="font-bold hover:underline">
        Spektakel Theatre
      </a>{" "}
      in Vienna, Austria. There will be whole days filled with improv training, jam sessions and performances in
      both English and German...basically just a weekend-long impro-party!
    </p>
    <p className="pt-6">
      To stay informed please join our mailing list below or follow us on{" "}
      <a className="underline hover:underline" href="https://www.facebook.com/BLINK.Improfestival">
        Facebook
      </a>
      .
    </p>
  </>
);

const GermanContent = () => (
  <>
    <p>Hallo Improspieler!</p>
    <p className="pt-6">
      Wir planen gerade ein aufregendes neues Improtheater-Festival, dass{" "}
      vom <strong>12. bis 14. Juni 2020</strong> im{" "}
      <a href="https://spektakel.wien/" className="font-bold hover:underline">
        Theater Spektakel
      </a>{" "}
      in Wien stattfinden wird. Den ganzen Tag lang wird es laufend Impro-Trainingseinheiten, Jam Sessions und
      Platz für freies Herumprobieren geben, und abends ein buntes Show-Programm, auf Deutsch und Englisch ... so
      was wie ein ganzes Wochenende lang Impro-Party!
    </p>
    <p className="pt-6">
      Um auf dem Laufenden zu bleiben, trage hier Deine eMail-Adresse ein und gib uns ein{" "}
      <a className="underline hover:underline" href="https://www.facebook.com/BLINK.Improfestival">
         'Like' auf Facebook!
      </a>
    </p>
  </>
);

const IndexPage: NextPage = () => {
  const [language, setLanguage] = useState("EN");
  return (
    <div
      className="bg-blue-200 min-h-screen flex md:items-center justify-center"
      style={{
        backgroundImage: "linear-gradient( 109.6deg,  rgba(31,179,237,1) 11.2%, rgba(17,106,197,1) 91.1% )"
      }}
    >
      <Head>
        <title>BLINK! Impro-Festival</title>
      </Head>
      <div className="mx-auto w-full max-w-xl my-16 lg:my-8 mx-4 py-16">
        <div
          className="bg-white border-solid border-black border-4 flex flex-col justify-content items-center mx-4"
          style={{ boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" }}
        >
          <Logo className="w-64 -mt-24" width="300px" height="150px" style={{ transform: "translateY(0px)" }} />
          <div className="flex items-center justify-end">
            <button
              onClick={() => setLanguage("EN")}
              className={language === "EN" ? "text-gray-500 font-bold" : "text-gray-500"}
            >
              English
            </button>
            <div className="mx-1">·</div>
            <button
              onClick={() => setLanguage("DE")}
              className={language === "DE" ? "text-gray-500 font-bold" : "text-gray-500"}
            >
              Deutsch
            </button>
          </div>
          <div className="p-4 sm:p-8 md:p-16 md:pt-8 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="mb-8 z-20">
              {language === "EN" ? <EnglishContent /> : <GermanContent />}
              <p className="pt-4 text-right text-gray-500">-- Christof, Hanni, Shawn, Florian, Coline und Ben</p>
            </div>

            <SignupForm />
            <Girl
              className="lg:hidden bottom-0 left-0 block absolute z-10 pointer-events-none"
              style={{ opacity: "0.05" }}
            />
          </div>
        </div>
      </div>
      <Girl className="hidden bottom-0 left-0 lg:block fixed" />
    </div>
  );
};

export default IndexPage;
