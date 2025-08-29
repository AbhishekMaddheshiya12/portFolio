import React from "react";
import HighOrderComponet from "../Components/HOC";
import { motion } from "framer-motion";
import {
  Icon,
  Instagram,
  LinkedinIcon,
  LocationEditIcon,
  Mail,
  MailIcon,
  Phone,
  SendIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  //   CardActions,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Contacts() {
  const mail = "abhishekmaddheshiya954@gmail.com";
  const phone = "9125858767";
  const Address = "Ballia, Uttar Pradesh, India";
  const details = [
    {
      name: "Linkdin",
      link: "https://www.linkedin.com/in/abhishek-maddheshiya-954/",
      icon: <LinkedinIcon />,
    },
    {
      name: "intsagram",
      link: "https://www.instagram.com/abhishekmaddheshiya/",
      icon: <Instagram />,
    },
    {
      name: "Email",
      link: `mailto:${mail}`,
      icon: <MailIcon />,
    },
  ];
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("message has been sent successfully");
  }
  return (
    <div className="w-4/6 m-auto ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="italic text-gray-100 text-7xl text-center mt-10 -underline-offset-8"
        style={{ fontFamily: "Allura, cursive" }}
      >
        Contact Me
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="italic text-gray-100 text-xl text-center mt-1 -underline-offset-8"
        // style={{ fontFamily: "Allura, cursive" }}
      >
        If you’re looking for someone who is passionate about building clean,
        user-focused applications and eager to take on challenges, I’d love to
        connect. Feel free to reach out if you have an opportunity, a project
        idea, or even if you just want to chat about tech and development. Let’s
        build something meaningful together.
      </motion.p>

      <motion.div className="grid md:grid-cols-2 grid-rows gap-28 my-10">
        <motion.div className=" py-3 px-1.5 rounded-3xl">
          <motion.p
            className="text-gray-200 text-2xl font-bold text-center my-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            Contact Information
          </motion.p>
          <motion.div
            className="flex flex-row mt-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <MailIcon className="text-white mr-8" />
            <motion.p className="text-gray-200 text-md  text-center">
              {mail}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-row mt-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Phone className="text-white"  />
            <motion.p className="text-gray-200 text-md ml-8 text-center">
              {phone}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-row mt-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <LocationEditIcon className="text-white" />
            <motion.p className="text-gray-200 text-md ml-8 text-center">
              {Address}
            </motion.p>
          </motion.div>
          <motion.div className="mr-10">
            <motion.p
              className="text-gray-200 text-lg mt-8 text-center underline"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              Connect With Me
            </motion.p>
            <motion.div className="flex flex-row w-10/12 m-auto justify-evenly">
              {details.map((item) => {
                return (
                  <motion.div
                    className="flex flex-row mt-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                  >
                    <button onClick={() => window.open(item.link, "_blank")} className="text-white" >
                      {item.icon}
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-row"></motion.div>
        </motion.div>
        <motion.div className="py-3 px-1.5 rounded-3xl mr-10" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
          <Card className="w-full max-w-sm bg-transparent text-white border-blue-100 shadow-2xl shadow-white z-10">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Type your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="email">Your Email</Label>
                    </div>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="Type your email"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Label htmlFor="message">Your Message</Label>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message..."
                      required
                      rows={4}
                      className="w-full p-3 border bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full flex flex-row hover:scale-105 duration-300" onClick={handleSubmit} >
                Send Message 
                <SendIcon></SendIcon>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HighOrderComponet(Contacts);
