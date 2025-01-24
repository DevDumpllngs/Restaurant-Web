import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => (
  <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 h-screen relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contáctanos
      </motion.h2>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Information */}
        <motion.div
          className="lg:w-1/2 bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary opacity-20 rounded-full"></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Información</h3>
          <div className="flex items-center gap-4 mb-6">
            <FaPhoneAlt className="text-primary text-xl" />
            <p className="text-gray-600 text-lg">+1 234 567 890</p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="text-primary text-xl" />
            <p className="text-gray-600 text-lg">info@restaurante.com</p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <p className="text-gray-600 text-lg">
              Calle Gourmet 123, Ciudad, País
            </p>
          </div>
          {/* Map */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094977!2d144.95373631576895!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773ef9eb70f76d!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1638396751392!5m2!1sen!2sus"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border-2 border-gray-300"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:w-1/2 bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary opacity-20 rounded-full"></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Envíanos un mensaje
          </h3>
          <form>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:border-primary focus:ring-2 focus:ring-primary outline-none transition"
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition"
            >
              Enviar mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
