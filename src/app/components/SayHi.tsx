'use client';
import { useState } from 'react';
import { ReCaptchaProvider } from "next-recaptcha-v3";

interface newErrorType {
  name?: string;
  email?: string;
  message?: string;
};

const capchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function SayHi() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({} as newErrorType);

  const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      const newErrors : newErrorType = {};
      if (!name) newErrors.name = "Name is required";
      if (!email) newErrors.email = "Email is required";
      else if (!validateEmail(email)) newErrors.email = "Email is invalid";
      if (!message) newErrors.message = "Message is required";

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
          const res = await fetch("/api/mail", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, message }),
          });

          if (res.ok) {
              alert("Message sent successfully!");
              setName("");
              setEmail("");
              setMessage("");
          } else {
              alert("Failed to send message.");
          }
      }
  };

  return (
      <ReCaptchaProvider reCaptchaKey={capchaKey}>
        <div className="flex flex-col items-center" id="sayhi">
            <h3 className="my-4">Get Your Free Consultation Today!</h3>
            <p className="text-lg pb-2">
                Are you looking for expert advice but not sure where to start? I'm offering a free consultation to help you navigate your next steps with confidence. Whether you're facing a tough decision, planning a new project, or just need some guidance, I am here to assist you—at no cost!
            </p>

            <form
                onSubmit={handleSubmit}
                className="w-full p-4 border-2 border-dashed border-primary rounded"
            >
                <h2 className="text-2xl font-bold mb-4">Say Hi</h2>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 w-full border-2 border-dashed border-primary rounded-md bg-lightbackground dark:bg-darkbackground"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 w-full border-2 border-dashed border-primary rounded-md bg-lightbackground dark:bg-darkbackground"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 p-2 w-full border-2 border-dashed border-primary rounded-md bg-lightbackground dark:bg-darkbackground"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-primary text-lightbackground font-semibold rounded-md shadow hover:bg-primary-dark"
                >
                    Say Hi
                </button>
            </form>
        </div>
      </ReCaptchaProvider>
    );
}
