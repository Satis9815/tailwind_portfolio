import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { urls } from '../utils/urlUtils';

const ContactItem = ({ icon: Icon, title, content }: {
  icon: React.ElementType;
  title: string;
  content: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-4"
  >
    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
);



const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const submitForm = (event:any) => {
    event.preventDefault(); // Prevent the form from reloading the page
    const { name, email, message } = formData;

    // Construct mailto link
    const mailtoLink = `mailto:${urls.EMAIL}?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(
      message
    )}`;

    // Open mailto link
    window.location.href = mailtoLink;
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form noValidate className="grid md:grid-cols-2 gap-12" onSubmit={submitForm}>
            <div className="space-y-8">
              <ContactItem icon={Mail} title="Email" content={urls.EMAIL} />
              <ContactItem icon={Phone} title="Phone" content={urls.PHONE} />
              <ContactItem icon={MapPin} title="Location" content={urls.LOCATION} />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:border-transparent"
                ></textarea>
              </div>
              <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors `}
            >
              Send Message
            </button>
            </motion.div>
          </form>
   

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;