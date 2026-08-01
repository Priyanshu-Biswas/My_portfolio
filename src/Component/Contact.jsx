import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "ooookkkk",     // replace
                "template_5buiygk",    // replace
                form.current,
                "b1iEX-6wrxqCCjhXj"     // replace
            )
            .then(
                () => {
                    alert("Message sent successfully ✅");
                    form.current.reset();
                },
                (error) => {
                    console.error(error);
                    alert("Failed to send ❌");
                }
            );
    };

    return (
        <section
            id="contact"
            className="py-24 px-6 pr-8 md:px-20 text-black"
            data-aos="fade-up"
        >
            <h2
                className="text-center text-4xl font-semibold mb-10"
                data-aos="fade-up"
            >
                Contact Me
            </h2>

            <div
                className="flex justify-center -mt-3 mb-11"
                data-aos="fade-up"
            >
                <div className="w-20 h-[3px] bg-white/40 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT */}
                <div data-aos="fade-up" className="text-lg">
                    <h3 className="font-semibold text-2xl mb-4">Get In Touch</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        Got an idea or question?<br />
                        Or just want to say hi?<br />
                        I’d love to hear from you—Let’s talk.
                    </p>
                    <p className="text-[19px]">Email: priyanshubiswas1682004@gmail.com</p>
                    <p className="text-[19px]">Phone: +91 9903749640</p>
                </div>

                {/* RIGHT FORM */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4"
                    data-aos="fade-up"
                >
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="p-3  rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        required
                        className="p-3 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="p-3  rounded bg-black text-white h-32 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;