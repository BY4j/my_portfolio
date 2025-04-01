"use client"

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", mail: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
  <section className="absolute w-[40vw] h-[95vh] p-[1em] right-[7em] top-[2em] border-orange-600 flex justify-center items-center border-4 border-purple-600 bg-[#c8b28b]">
    <div className="flex flex-col size-[95%] items-center justify-start border-4 border-indigo-600 gap-[0.4em]">
      <div className="flex justify-center mb-[5em] items-center w-[40em] h-[3em] bg-[#443020]">
        <h3>Contact form</h3>
      </div>
      <form className="w-[50%] mx-auto p-4 border border-[#a68458]">
        <label className="block mb-2">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-[100%] border border-[#a68458]" required />
        </label>
        <label className="block mb-2">
          Mail:
          <input type="email" name="mail" value={formData.mail} onChange={handleChange} className="w-[100%] border border-[#a68458]" required />
        </label>
        <label className="block mb-2">
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-[100%] border border-[#a68458]" required />
        </label>
        <button type="submit" className="w-[100%] cursor-pointer hover:bg-white hover:text-black bg-blue-500 text-white mt-2">
          Send
          </button>
      </form>
    </div>
  </section>
  );
}