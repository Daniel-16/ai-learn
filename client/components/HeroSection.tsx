"use client";
import Image from "next/image";
import hero from "../public/images/undraw_doctor_kw5l.png";
import { ChangeEvent, useEffect, useState } from "react";
import SuccessModal from "./SuccessModal";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const postEmail: () => Promise<void> = async () => {
    setLoading(true);
    try {
      const postedEmail = await axios.post(
        "https://healthcare-waitlist-api.onrender.com/",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEmail("");
      console.log(postedEmail);
      setLoading(false);
      toggle();
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
      console.error(error?.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  // useEffect(() => {
  //   // setTimeout(() => {
  //   setError("");
  //   // }, 5000);
  // }, []);
  return (
    <>
      <SuccessModal isOpen={isOpen} toggle={toggle} />
      <section className="mt-10 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-indigo-700 font-bold text-4xl xl:text-5xl">
            Connecting with Doctors made easier through AI
          </h1>
          <p className="text-gray-600 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            By leveraging AI technology, we are transforming the way patients
            gets medical attention by connecting patients to doctors without
            needing to visit a hospital.
          </p>
          <h3 className="text-indigo-700 text-3xl font-semibold">
            Join the waitlist to get notified when we launch
          </h3>
          {error !== "" && <ErrorMessage errorMessage={error} />}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              postEmail();
              // toggle();
            }}
            className="flex items-center justify-center border rounded-lg p-1"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className={
                loading
                  ? "text-gray-500 w-full p-2 outline-none cursor-not-allowed"
                  : "text-gray-500 w-full p-2 outline-none"
              }
              onChange={handleEmail}
              value={email}
              required
              disabled={loading ? true : false}
            />
            <button
              type="submit"
              disabled={loading ? true : false}
              className={
                loading
                  ? "py-2 px-3 rounded-lg font-medium text-white bg-indigo-500 outline-none shadow-md focus:shadow-none sm:px-4 cursor-not-allowed"
                  : "py-2 px-3 rounded-lg font-medium text-white bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
              }
              // onClick={toggle}
            >
              <div className="inline-flex items-center space-x-2">
                {loading && (
                  <div className="animate-pulse w-3 h-3 rounded-full bg-white"></div>
                )}
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <p className="text-center">Join</p>
                )}
              </div>
            </button>
          </form>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <Image src={hero} alt="Doctor" priority={true} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
