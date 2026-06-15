import Header from "../../components/Header";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Contact
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-bold">
              Let&apos;s Build Something Great Together.
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-gray-500">
              I&apos;m always interested in discussing software engineering,
              full-stack development, Next.js projects, freelance opportunities,
              and graduate research opportunities in Software Engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a
                    href="mailto:jubayer.khan.cs@gmail.com"
                    className="text-xl font-medium hover:underline"
                  >
                    jubayer.khan.cs@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <a
                    href="tel:+8801971206180"
                    className="text-xl font-medium hover:underline"
                  >
                    +880 1971-206180
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-xl font-medium">Dhaka, Bangladesh</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm mb-3">Connect With Me</p>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/jubayerkhan"
                      target="_blank"
                      rel="noreferrer"
                      className="border px-5 py-2 rounded-full hover:scale-105 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/jubayer-khan-6a7167167/"
                      target="_blank"
                      rel="noreferrer"
                      className="border px-5 py-2 rounded-full hover:scale-105 transition"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="border rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-xl p-4 bg-transparent outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-xl p-4 bg-transparent outline-none"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border rounded-xl p-4 bg-transparent outline-none"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full border rounded-xl p-4 bg-transparent outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold border hover:scale-[1.02] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold">Open to New Opportunities</h2>

            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Whether you have a project, internship opportunity, freelance
              work, or research collaboration in mind, I&apos;d be happy to hear from
              you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
