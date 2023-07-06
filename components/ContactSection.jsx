import React from "react"
import Image from "next/image"

const Contact = () => {
    return(
        <section id="contact">
          <div className="bg-gray-100 dark:bg-black rounded-2xl my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl text-purple-600">
              Contact
              <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex justify-center w-full px-10 mb-5">
              <Image
                src="/get-in-touch.jpg"
                alt=""
                width={800}
                height={400}
                className="rounded-md shadow-2xl"
              />
            </div>

            <div className="md:text-center dark:text-neutral-400 text-neutral-600 ml-10 mr-10 md:px-4 md:py-4 mb-10">
              I am available for freelance or full-time positions. 
              Send a message using the form below or shoot me an email at
              {" "}<span className="font-bold text-purple-500">
                asimmons1129@gmail.com 
              </span>{". "}
              Hope to collab with you soon!
            </div>

          <form action="https://getform.io/f/f8c1fbbd-8138-49f6-90ba-f8eefd98f9d6" method="POST" className="ml-10 mr-10 md:px-4">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2"> 
            <div className="flex flex-col">
              <label className="text-purple-800 mb-2 ">Name</label>
              <input className="focus:border-teal-400 border-2 border-neutral-400 rounded-md flex shadow-lg mb-4" name="name" type="text" placeholder="Name"/>
            </div>
            <div className="flex flex-col">
              <label className="text-purple-800 mb-2">Phone Number</label>
              <input className="focus:border-teal-400 border-2 border-neutral-400 rounded-md flex shadow-lg mb-4" name="phone" type="tel" placeholder="Phone Number"/>
            </div>
            </div>
            <label className="text-purple-800 mb-2">Email</label>
            <input className="focus:border-teal-400 border-2 border-neutral-400 rounded-md flex w-full shadow-lg mb-4" name="email" type="email" placeholder="Email"/>
            <label className="text-purple-800 mb-2">Subject</label>
            <input className="focus:border-teal-400 border-2 border-neutral-400 rounded-md flex w-full shadow-lg mb-4" name="subject" type="text" placeholder="Subject"/>
            <label className="text-purple-800 mb-2">Message</label>
            <textarea className="focus:border-teal-400 border-2 border-neutral-400 rounded-md flex w-full shadow-lg" name="message" rows='10'></textarea>
            <button className="bg-purple-400 hover:bg-teal-700 rounded-md shadow-lg p-4 text-white mt-6">Let's Collaborate!</button>
          </form>

          </div>
        </section>
    )
}

export default Contact