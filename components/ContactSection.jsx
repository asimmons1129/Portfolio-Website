import React from "react"

const Contact = () => {
    return(
        <section id="contact">
          <div className="bg-gray-100 dark:bg-black rounded-2xl my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl text-purple-600">
              Contact
              <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
          <form action="https://getform.io/f/f8c1fbbd-8138-49f6-90ba-f8eefd98f9d6" method="POST" className="ml-10 mr-10 px-4">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2"> 
            <div className="flex flex-col">
              <label className="text-purple-800 mb-2 ">Name</label>
              <input className="border-2 border-neutral-400 rounded-md flex shadow-lg mb-4" name="name" type="text" placeholder="Name"/>
            </div>
            <div className="flex flex-col">
              <label className="text-purple-800 mb-2">Phone Number</label>
              <input className="border-2 border-neutral-400 rounded-md flex shadow-lg mb-4" name="phone" type="tel" placeholder="Phone Number"/>
            </div>
            </div>
            <label className="text-purple-800 mb-2">Email</label>
            <input className="border-2 border-neutral-400 rounded-md flex w-full shadow-lg mb-4" name="email" type="email" placeholder="Email"/>
            <label className="text-purple-800 mb-2">Subject</label>
            <input className="border-2 border-neutral-400 rounded-md flex w-full shadow-lg mb-4" name="subject" type="text" placeholder="Subject"/>
            <label className="text-purple-800 mb-2">Message</label>
            <textarea className="border-2 border-neutral-400 rounded-md flex w-full shadow-lg" name="message" rows='10'></textarea>
            <button className="bg-purple-400 hover:bg-teal-700 rounded-md shadow-lg p-4 text-white mt-6">Send Message</button>
          </form>

          </div>
        </section>
    )
}

export default Contact