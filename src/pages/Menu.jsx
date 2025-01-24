import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import chelseaImage from '../assets/chelsea.webp';

const Menu = () => {
  const [selectedSection, setSelectedSection] = useState('Entradas');
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [modalDish, setModalDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderCompleteOpen, setIsOrderCompleteOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    creditCard: ''
  });

  const sections = [
    {
      name: 'Entradas 🥗',
      emoji: '🥗',
      dishes: [
        { name: 'Tartar de Salmón', image: chelseaImage, description: 'Salmón fresco con aguacate', ingredients: 'Salmón, aguacate, limón', price: '$15.99', rating: 4.5, emoji: '🐟' },
        { name: 'Carpaccio', image: chelseaImage, description: 'Carpaccio de res con trufa', ingredients: 'Res, trufa, parmesano', price: '$18.99', rating: 4.7, emoji: '🥩' },
        { name: 'Ceviche', image:  chelseaImage, description: 'Ceviche de pescado peruano', ingredients: 'Pescado, limón, cilantro', price: '$14.99', rating: 4.8, emoji: '🌶️' },
        { name: 'Ensalada César', image:  chelseaImage, description: 'Ensalada con aderezo César', ingredients: 'Lechuga, pollo, parmesano', price: '$12.99', rating: 4.6, emoji: '🥗' },
        { name: 'Bruschetta', image:  chelseaImage, description: 'Pan tostado con tomate y albahaca', ingredients: 'Pan, tomate, albahaca', price: '$10.99', rating: 4.4, emoji: '🍅' },
        { name: 'Gazpacho', image: chelseaImage, description: 'Sopa fría de tomate', ingredients: 'Tomate, pepino, pimiento', price: '$9.99', rating: 4.2, emoji: '🥄' },
        { name: 'Rollitos Primavera', image:  chelseaImage, description: 'Rollitos con vegetales frescos', ingredients: 'Zanahoria, lechuga, arroz', price: '$11.99', rating: 4.3, emoji: '🥕' },
        { name: 'Sopa de Calabaza', image:  chelseaImage, description: 'Sopa cremosa de calabaza', ingredients: 'Calabaza, crema, especias', price: '$13.99', rating: 4.6, emoji: '🎃' },
        { name: 'Tostadas de Atún', image:  chelseaImage, description: 'Atún fresco en tostadas', ingredients: 'Atún, maíz, aguacate', price: '$14.99', rating: 4.7, emoji: '🐟' }
      ]
    },
    {
      name: 'Pastas 🍝',
      emoji: '🍝',
      dishes: [
        { name: 'Ravioli de Trufa', image:  chelseaImage, description: 'Rellenos de trufa negra', ingredients: 'Trufa negra, queso, pasta', price: '$19.99', rating: 4.9, emoji: '🍄' },
        { name: 'Risotto', image:  chelseaImage, description: 'Risotto de hongos', ingredients: 'Arroz, hongos, parmesano', price: '$17.99', rating: 4.6, emoji: '🧀' },
        { name: 'Linguine al Mar', image: chelseaImage, description: 'Linguine con mariscos', ingredients: 'Linguine, camarones, almejas', price: '$21.99', rating: 4.7, emoji: '🦐' },
        { name: 'Fettuccine Alfredo', image:  chelseaImage, description: 'Fettuccine con salsa Alfredo', ingredients: 'Fettuccine, crema, parmesano', price: '$18.99', rating: 4.5, emoji: '🧄' },
        { name: 'Pasta al Pesto', image:  chelseaImage, description: 'Pasta con salsa de albahaca', ingredients: 'Albahaca, ajo, parmesano', price: '$16.99', rating: 4.4, emoji: '🌿' },
        { name: 'Espagueti a la Boloñesa', image:  chelseaImage, description: 'Espagueti con carne molida', ingredients: 'Carne, tomate, espagueti', price: '$19.99', rating: 4.8, emoji: '🍅' },
        { name: 'Lasaña de Verduras', image:  chelseaImage, description: 'Lasaña con vegetales frescos', ingredients: 'Calabacín, berenjena, queso', price: '$20.99', rating: 4.6, emoji: '🥒' },
        { name: 'Macarrones con Queso', image:  chelseaImage, description: 'Macarrones con queso cremoso', ingredients: 'Pasta, queso cheddar, crema', price: '$15.99', rating: 4.3, emoji: '🧀' },
        { name: 'Pasta Carbonara', image:  chelseaImage, description: 'Pasta con salsa de huevo y tocino', ingredients: 'Huevo, tocino, parmesano', price: '$19.49', rating: 4.7, emoji: '🥓' }
      ]
    },
    {
      name: 'Carnes 🥩',
      emoji: '🥩',
      dishes: [
        { name: 'Filete Mignon', image:  chelseaImage, description: 'Corte premium a la parrilla', ingredients: 'Res, hierbas, mantequilla', price: '$29.99', rating: 5.0, emoji: '🔥' },
        { name: 'Costillas BBQ', image:  chelseaImage, description: 'Costillas marinadas', ingredients: 'Cerdo, salsa BBQ', price: '$24.99', rating: 4.8, emoji: '🍖' },
        { name: 'Cordero', image:  chelseaImage, description: 'Cordero asado con hierbas', ingredients: 'Cordero, romero, ajo', price: '$27.99', rating: 4.7, emoji: '🌿' },
        { name: 'Pollo Asado', image:  chelseaImage, description: 'Pollo jugoso al horno', ingredients: 'Pollo, especias, limón', price: '$22.99', rating: 4.5, emoji: '🍗' },
        { name: 'Bistec a la Pimienta', image:  chelseaImage, description: 'Bistec con salsa de pimienta', ingredients: 'Res, pimienta, crema', price: '$28.99', rating: 4.9, emoji: '🌶️' },
        { name: 'Chuletas de Cerdo', image:  chelseaImage, description: 'Chuletas con glaseado dulce', ingredients: 'Cerdo, azúcar moreno, ajo', price: '$25.99', rating: 4.8, emoji: '🍖' },
        { name: 'Hamburguesa Gourmet', image:  chelseaImage, description: 'Hamburguesa con queso brie', ingredients: 'Res, brie, cebolla caramelizada', price: '$18.99', rating: 4.6, emoji: '🍔' },
        { name: 'Solomillo', image:  chelseaImage, description: 'Solomillo a la parrilla', ingredients: 'Res, mantequilla, hierbas', price: '$30.99', rating: 5.0, emoji: '🥩' },
        { name: 'Alitas Picantes', image:  chelseaImage, description: 'Alitas bañadas en salsa picante', ingredients: 'Pollo, pimientos, especias', price: '$16.99', rating: 4.4, emoji: '🌶️' }
      ]
    },
    {
      name: 'Pescados 🐟',
      emoji: '🐟',
      dishes: [
        { name: 'Salmón', image: chelseaImage, description: 'Salmón en salsa de limón', ingredients: 'Salmón, limón, eneldo', price: '$23.99', rating: 4.6, emoji: '🍋' },
        { name: 'Atún', image: chelseaImage, description: 'Atún sellado con sésamo', ingredients: 'Atún, sésamo, soja', price: '$25.99', rating: 4.7, emoji: '🌊' },
        { name: 'Bacalao', image: chelseaImage, description: 'Bacalao al horno', ingredients: 'Bacalao, tomate, aceitunas', price: '$22.99', rating: 4.5, emoji: '🥘' },
        { name: 'Trucha al Vapor', image: chelseaImage, description: 'Trucha con vegetales', ingredients: 'Trucha, limón, hierbas', price: '$21.99', rating: 4.7, emoji: '🐟' },
        { name: 'Pulpo a la Gallega', image: chelseaImage, description: 'Pulpo con pimentón y aceite', ingredients: 'Pulpo, pimentón, aceite de oliva', price: '$28.99', rating: 4.9, emoji: '🐙' },
        { name: 'Camarones al Ajillo', image: chelseaImage, description: 'Camarones salteados en ajo', ingredients: 'Camarones, ajo, limón', price: '$24.99', rating: 4.8, emoji: '🦐' },
        { name: 'Merluza en Salsa Verde', image: chelseaImage, description: 'Merluza con perejil y guisantes', ingredients: 'Merluza, perejil, guisantes', price: '$26.99', rating: 4.7, emoji: '🍃' },
        { name: 'Paella de Mariscos', image: chelseaImage, description: 'Arroz con mariscos frescos', ingredients: 'Arroz, camarones, almejas', price: '$29.99', rating: 4.9, emoji: '🍤' },
        { name: 'Sopa de Pescado', image: chelseaImage, description: 'Sopa caliente con trozos de pescado', ingredients: 'Pescado, caldo, verduras', price: '$19.99', rating: 4.5, emoji: '🥣' }
      ]
    },
    {
      name: 'Postres 🍰',
      emoji: '🍰',
      dishes: [
        { name: 'Tiramisú', image: chelseaImage, description: 'Tiramisú tradicional', ingredients: 'Café, mascarpone, cacao', price: '$8.99', rating: 4.9, emoji: '☕' },
        { name: 'Chocolate', image: chelseaImage, description: 'Mousse de chocolate negro', ingredients: 'Chocolate, crema, azúcar', price: '$9.99', rating: 5.0, emoji: '🍫' },
        { name: 'Cheesecake', image: chelseaImage, description: 'Cheesecake de frutos rojos', ingredients: 'Queso crema, galleta, frutos rojos', price: '$9.99', rating: 4.8, emoji: '🍓' },
        { name: 'Brownie', image: chelseaImage, description: 'Brownie de chocolate con nueces', ingredients: 'Chocolate, nueces, harina', price: '$8.49', rating: 4.7, emoji: '🍫' },
        { name: 'Helado Artesanal', image: chelseaImage, description: 'Helado hecho a mano', ingredients: 'Leche, vainilla, frutas', price: '$6.99', rating: 4.5, emoji: '🍦' },
        { name: 'Flan de Caramelo', image: chelseaImage, description: 'Flan cremoso con caramelo', ingredients: 'Huevo, leche, azúcar', price: '$7.99', rating: 4.8, emoji: '🍮' },
        { name: 'Crepas Dulces', image: chelseaImage, description: 'Crepas rellenas de chocolate', ingredients: 'Harina, chocolate, crema', price: '$9.49', rating: 4.6, emoji: '🥞' },
        { name: 'Pastel de Zanahoria', image: chelseaImage, description: 'Pastel suave con zanahoria', ingredients: 'Zanahoria, especias, nueces', price: '$10.99', rating: 4.9, emoji: '🥕' },
        { name: 'Frutas Frescas', image: chelseaImage, description: 'Mix de frutas tropicales', ingredients: 'Mango, piña, kiwi', price: '$6.99', rating: 4.5, emoji: '🍍' }
      ]
    }
  ];

  const addToOrder = (dish) => {
    setSelectedDishes([...selectedDishes, dish]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDishModal = (dish) => {
    setModalDish(dish);
  };

  const closeDishModal = () => {
    setModalDish(null);
  };

  const handlePurchaseConfirmation = () => {
    // Validate customer info
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.creditCard) {
      alert('Por favor complete todos los campos');
      return;
    }

    setIsModalOpen(false);
    setIsOrderCompleteOpen(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsOrderCompleteOpen(false);
      setSelectedDishes([]);
      setCustomerInfo({ name: '', phone: '', creditCard: '' });
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-[#F0F0EF] p-8 font-serif">
      {/* Dishes Container */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="w-3/4 h-[85vh] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" // Contenedor de platillos con altura y ancho específicos
      >
        {/* Section Navigation */}
        <div className="flex border-b border-emerald-100 px-4 space-x-4 mt-2"> {/* Ajusté el margen superior para los botones */}
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setSelectedSection(section.name)}
              className={`px-4 py-2 text-sm flex items-center space-x-2 rounded-lg shadow-md transition-all ${
                selectedSection === section.name 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-500'
              }`} // Botones más pequeños, separados y con bordes redondeados
            >
              <span>{section.emoji}</span>
              <span>{section.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Dishes Scroll Container */}
        <div className="flex-grow overflow-auto p-6">
          <div className="grid grid-cols-3 gap-6">
            {sections.find(s => s.name === selectedSection)?.dishes.map((dish) => (
              <motion.div 
                key={dish.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 relative group"
              >
                <div className="relative">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 flex justify-center items-center transition-opacity"
                  >
                    <button 
                      onClick={() => openDishModal(dish)}
                      className="bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200"
                    >
                      🔍
                    </button>
                  </motion.div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg flex items-center">
                      {dish.emoji} {dish.name}
                    </h3>
                    <span className="text-yellow-500">
                      {'★'.repeat(Math.floor(dish.rating)) + '☆'.repeat(5 - Math.floor(dish.rating))}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{dish.description}</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToOrder(dish)}
                    className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                  >
                    Agregar 🛒
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Order Container */}
      <motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 60 }}
  className="w-1/4 h-[85vh] ml-8 bg-[#F5F5F4] rounded-3xl p-6 border border-gray-200 flex flex-col shadow-xl" // Contenedor de la orden con altura y ancho específicos
>
  <h2 className="text-2xl font-light text-gray-800 border-b border-emerald-500 pb-4 mb-4 flex items-center">
    🛍️ Tu Orden
  </h2>
  <div className="flex-grow overflow-auto">
    <AnimatePresence>
      {selectedDishes.length > 0 ? (
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-2"
        >
          {selectedDishes.map((dish, index) => (
            <motion.li 
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
            >
              <div className="flex flex-col">
                <span>{dish.emoji} {dish.name}</span>
                <span className="text-gray-500 text-sm">{dish.price}</span> {/* Muestra el precio aquí */}
              </div>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  const newDishes = [...selectedDishes];
                  newDishes.splice(index, 1);
                  setSelectedDishes(newDishes);
                }}
                className="text-red-500"
              >
                ✕
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <p className="text-gray-500 text-center">🕳️ Orden vacía</p>
      )}
    </AnimatePresence>
  </div>
  <p className="text-emerald-600 text-xl font-bold mt-4">Total: ${selectedDishes.reduce((total, dish) => total + parseFloat(dish.price.replace('$', '')), 0).toFixed(2)}</p> {/* Total dinámico */}
  <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConfirmOrder}
          className="w-full mt-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
        >
          Confirmar Orden 💳
        </motion.button>
</motion.div>

<AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-8 relative w-full max-w-md transform transition-all"
            >
              <div className="absolute top-4 right-4 text-gray-400">
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="hover:text-gray-600"
                >✕</button>
              </div>
              <h2 className="text-3xl font-light text-emerald-700 mb-6 text-center">
                Confirma tu Orden 📝
              </h2>
              <form className="space-y-4">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre Completo" 
                    value={customerInfo.name} 
                    onChange={handleInputChange} 
                    className="w-full p-3 border-2 border-emerald-100 rounded-lg focus:border-emerald-500 transition"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Número de Teléfono" 
                    value={customerInfo.phone} 
                    onChange={handleInputChange} 
                    className="w-full p-3 border-2 border-emerald-100 rounded-lg focus:border-emerald-500 transition"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    name="creditCard" 
                    placeholder="Tarjeta de Crédito" 
                    value={customerInfo.creditCard} 
                    onChange={handleInputChange} 
                    className="w-full p-3 border-2 border-emerald-100 rounded-lg focus:border-emerald-500 transition"
                  />
                </div>
                <button 
                  type="button" 
                  onClick={handlePurchaseConfirmation}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold shadow-md"
                >
                  Confirmar Compra 💳
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Complete Popup */}
      <AnimatePresence>
        {isOrderCompleteOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-12 text-center"
            >
              <div className="text-8xl mb-4">✅</div>
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">
                ¡Orden Completada!
              </h2>
              <p className="text-gray-600 mb-6">Gracias por tu compra</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dish Modal */}
      <AnimatePresence>
        {modalDish && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl p-8 relative max-w-2xl w-full" // Hice el modal más grande
            >
              <button 
                onClick={closeDishModal} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >✕</button>
              <h2 className="text-3xl font-light text-gray-800 mb-4">{modalDish.name}</h2>
              <img 
                src={modalDish.image} 
                alt={modalDish.name} 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600 mb-4"><strong>Ingredientes:</strong> {modalDish.ingredients}</p>
              <p className="text-gray-600 mb-4">{modalDish.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-emerald-600 text-2xl font-semibold">{modalDish.price}</p>
                <span className="text-yellow-500 text-xl">
                  {'★'.repeat(Math.floor(modalDish.rating)) + '☆'.repeat(5 - Math.floor(modalDish.rating))}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
