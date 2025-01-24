import { motion } from "framer-motion";
import dish1 from "../assets/dish1.jpeg";
import chef from "../assets/chef.jpeg";
import restaurant from "../assets/restaurant.jpeg";

const About = () => (
  <section className="py-20 bg-white relative">
    {/* Background image */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
      style={{ backgroundImage: `url(${restaurant})` }}
    ></div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sobre Nosotros
      </motion.h2>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Somos un restaurante comprometido con la calidad, el sabor y una
            experiencia inolvidable. Con ingredientes frescos y un enfoque en la
            cocina innovadora, llevamos cada plato a un nuevo nivel. Nuestro
            objetivo es deleitar tus sentidos en cada visita.
          </p>
          <p className="text-lg text-gray-600">
            Desde platos tradicionales hasta creaciones modernas, nuestra
            dedicación a la excelencia nos hace únicos. Ven y descubre lo que
            hace de nosotros el lugar perfecto para disfrutar de una experiencia
            gastronómica incomparable.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src={dish1}
              alt="Plato delicioso"
              className="rounded-2xl shadow-lg"
            />
            <img
              src={chef}
              alt="Chef preparando comida"
              className="rounded-2xl shadow-lg"
            />
            <img
              src={restaurant}
              alt="Interior elegante del restaurante"
              className="rounded-2xl shadow-lg col-span-2"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
