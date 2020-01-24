import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const { handleSubmit, register } = useForm();

  const sendToMailchimp = values => {
    // POST to https://gmail.us4.list-manage.com/subscribe/post
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(sendToMailchimp)} className="flex flex-col">
      <input type="hidden" name="u" value="15dffbb4e7180a4bc6d1c0083" />
      <input type="hidden" name="id" value="7f5b13a2ed" />
      <input
        // type="email"
        autoCapitalize="off"
        autoCorrect="off"
        name="MERGE0"
        id="MERGE0"
        size={25}
        ref={register}
        className="bg-gray-200 px-5 py-4"
        placeholder="bob@example.com"
      />
      <button type="submit" className="bg-blue-900 text-white px-5 py-4">
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
