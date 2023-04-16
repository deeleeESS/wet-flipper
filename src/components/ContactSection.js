import React from "react";
// import SlideUpAnimation from "./SlideUpAnimation";

const ContactSection = () => {

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      name: (document.getElementById('name_input')).value,
      email: (document.getElementById('email_input')).value,
      subject: (document.getElementById('subject_input')).value,
      message: (document.getElementById('message_input')).value
    };
    try {
      const resposne = await fetch('/api/mail', {
      method: "POST",
      body: JSON.stringify(formData)
      })
      // const constantContactResponse = await fetch('/api/constantContact', {
      //   method: "POST",
      //   body: JSON.stringify(formData)
      //   })
      if(resposne.status === 200){
        (document.getElementById('name_input')).value = "";
        (document.getElementById('email_input')).value = "";
        (document.getElementById('subject_input')).value = "";
        (document.getElementById('message_input')).value = "";
        alert('Successfully sent information to enterEmailHere!')
      } else alert('Unable to send information...')
    } catch (error) {
      console.error(error);
      alert('Unable to send information...')
    }
  }

  return (
    // <SlideUpAnimation>
      <div className="flex justify-center px-10 pt-32">
        <div className="max-w-7xl flex flex-col gap-4 lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold text-primaryDark">
                  Any Questions?
                </p>
                <h2 className="text-4xl md:text-5xl text-primaryDark font-bold">
                  Please Contact Us
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                We&apos;re here to make it easy for you. Please don&apos;t
                hesitate to reach out to us with any questions or to schedule a
                service. We are ready to keep your pool pristine year round.
              </p>
            </div>
            <form method="post" onSubmit={handleOnSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative w-full group">
                  <input
                    type="text"
                    id="name_input"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-[1px] border-primary/20 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  />
                  <label
                    htmlFor="name_input"
                    className="peer-valid:scale-75 peer-valid:-translate-y-6 absolute text-gray-500 dark:text-gray-400 duration-300 transform scale-100 top-1/2 -translate-y-1/2 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative w-full group">
                  <input
                    type="text"
                    id="email_input"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-[1px] border-primary/20 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Email address is not valid.."
                    required
                  />
                  <label
                    htmlFor="email_input"
                    className="peer-valid:scale-75 peer-valid:-translate-y-6 absolute text-gray-500 dark:text-gray-400 duration-300 transform scale-100 top-1/2 -translate-y-1/2 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none"
                  >
                    Your Email
                  </label>
                </div>
              </div>
              <div className="relative w-full group">
                <input
                  type="text"
                  id="subject_input"
                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-[1px] border-primary/20 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  htmlFor="subject_input"
                  className="peer-valid:scale-75 peer-valid:-translate-y-6 absolute text-gray-500 dark:text-gray-400 duration-300 transform scale-100 top-1/2 -translate-y-1/2 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none"
                >
                  Subject
                </label>
              </div>
              <div className="relative w-full group">
                <textarea
                  id="message_input"
                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-[1px] border-primary/20 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label
                  htmlFor="message_input"
                  className="peer-valid:scale-75 peer-valid:top-3 absolute text-gray-500 dark:text-gray-400 duration-300 transform scale-100 top-1/2 -translate-y-1/2 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:top-3 pointer-events-none"
                >
                  Message
                </label>
              </div>
              <button  className="bg-primaryDark w-fit py-4 px-8 shadow-lg hover:scale-110 transition-all ease-in-out text-white/90 rounded-xl mx-auto md:mx-0">
                Send Message
              </button>
            </form>
          </div>
          <iframe
            className="min-h-[450px] w-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.61445794215!2d-81.31681032444567!3d28.741000473040057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7131c33c743fd%3A0x8620808ae24ceb91!2sEmpire%20Lawn%20%26%20Pest%20Control!5e0!3m2!1sen!2sus!4v1678205058485!5m2!1sen!2sus"
            frameBorder="0"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
  );
};

export default ContactSection;