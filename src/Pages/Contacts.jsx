import React from "react";
import HighOrderComponet from "../Components/HOC.jsx";
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
import { Button } from '../Components/ui/button.jsx';
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
      link: "https://www.instagram.com/abhishekmaddheshiya827/",
      icon: <Instagram />,
    },
    {
      name: "Email",
      link: `mailto:${mail}`,
      icon: <MailIcon />,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("message has been sent successfully");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-8 sm:mt-12 lg:mt-16"
      >
        <motion.div
          className="italic text-gray-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          style={{ fontFamily: "Allura, cursive" }}
        >
          Contact Me
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 leading-relaxed max-w-4xl mx-auto px-4"
        >
          If you're looking for someone who is passionate about building clean,
          user-focused applications and eager to take on challenges, I'd love to
          connect. Feel free to reach out if you have an opportunity, a project
          idea, or even if you just want to chat about tech and development. Let's
          build something meaningful together.
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-28 my-12 sm:my-16 lg:my-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Contact Information Section */}
        <motion.div 
          className="order-2 lg:order-1 py-6 sm:py-8 px-4 sm:px-6 rounded-3xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-gray-200 text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Information
          </motion.h2>

          {/* Contact Details */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <MailIcon className="text-white flex-shrink-0" size={20} />
              <motion.p className="text-gray-200 text-sm sm:text-base lg:text-lg break-all">
                {mail}
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="text-white flex-shrink-0" size={20} />
              <motion.p className="text-gray-200 text-sm sm:text-base lg:text-lg">
                +91 {phone}
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <LocationEditIcon className="text-white flex-shrink-0" size={20} />
              <motion.p className="text-gray-200 text-sm sm:text-base lg:text-lg">
                {Address}
              </motion.p>
            </motion.div>
          </div>

          {/* Social Links Section */}
          <motion.div 
            className="mt-8 sm:mt-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h3 className="text-gray-200 text-lg sm:text-xl font-semibold text-center underline underline-offset-4 mb-6">
              Connect With Me
            </motion.h3>
            
            <motion.div className="flex flex-row justify-center gap-6 sm:gap-8 lg:gap-12">
              {details.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    onClick={() => window.open(item.link, "_blank")} 
                    className="text-white p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                    aria-label={`Connect via ${item.name}`}
                  >
                    {React.cloneElement(item.icon, { size: 24 })}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          className="order-1 lg:order-2 py-6 sm:py-8 px-4 sm:px-6 rounded-3xl flex justify-center"
          initial={{ x: 100, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="w-full max-w-md bg-black/50 backdrop-blur-sm text-white border-blue-200/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Send a Message
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-200 font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Type your name"
                    required
                    className="bg-gray-800/50 border-gray-600 focus:border-blue-400 focus:ring-blue-400/20 text-white placeholder:text-gray-400 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200 font-medium">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="Type your email"
                    className="bg-gray-800/50 border-gray-600 focus:border-blue-400 focus:ring-blue-400/20 text-white placeholder:text-gray-400 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-200 font-medium">
                    Your Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message..."
                    required
                    rows={4}
                    className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 transition-all duration-300 text-white placeholder:text-gray-400 resize-none"
                  />
                </div>
              </form>
            </CardContent>

            <CardFooter className="pt-6">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                onClick={handleSubmit}
              >
                Send Message 
                <SendIcon size={18} />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HighOrderComponet(Contacts);