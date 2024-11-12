import React from "react";
import { toast } from "react-toastify";

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73609aa8-4d1c-4dda-b7a9-c71638d7223c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Us.
        </span>
      </h1>
      <p className="text-gary-500 max-w-100 text-center mb-8 mx-auto">
        Ready to make a Move? Let's Build Tour Future Together
      </p>
      <form onSubmit={onSubmit} className="max-w-4xl mx-auto text-gray-600 pt-800">
        <div className="flex gap-5">
            <div className="w-full md:w-1/2 text-left mr-1">
                Your Name
                <input type="text" className="w-full border border-gray-300 rounded py-3 px-4 mt-2" name="Name" placeholder="Enter your Name" required />
            </div>
            <div className="w-full md:w-1/2 text-left">
                Your Email
                <input type="email" className="w-full border border-gray-300 rounded py-3 px-4 mt-2" name="Email" placeholder="Enter your Email" required />
            </div>
        </div>
        <div>
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-7 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mt-6 rounded">
            {
                result ? result : "Send Message"
            }
        </button>
      </form>
    </div>
  );
};

export default Contact;
