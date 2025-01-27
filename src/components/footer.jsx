import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
          <div>
            <h2 className="text-4xl font-extrabold text-[#CE2829] mb-6 transform transition-all duration-300 hover:scale-105">
              Delicious Pizza
            </h2>
            <div className="flex items-center mb-4 hover:text-[#CE2829] transition-all duration-300">
              <FaMapMarkerAlt className="mr-4 text-3xl text-gray-400 hover:text-[#CE2829]" />
              <p className="text-lg">123 Pizza Street, Pizzaville</p>
            </div>
            <div className="flex items-center mb-4 hover:text-[#CE2829] transition-all duration-300">
              <FaEnvelope className="mr-4 text-3xl text-gray-400 hover:text-[#CE2829]" />
              <p className="text-lg">contact@deliciouspizza.com</p>
            </div>
            <div className="flex items-center mb-4 hover:text-[#CE2829] transition-all duration-300">
              <FaPhone className="mr-4 text-3xl text-gray-400 hover:text-[#CE2829]" />
              <p className="text-lg">(123) 456-7890</p>
            </div>
          </div>

        
          <div>
            <h3 className="text-3xl font-bold text-[#CE2829] mb-6">HOT-Menu</h3>
            <ul className="space-y-3">
              <li className="text-lg hover:text-[#CE2829] transition-all duration-300">Margherita</li>
              <li className="text-lg hover:text-[#CE2829] transition-all duration-300">Pepperoni</li>
              <li className="text-lg hover:text-[#CE2829] transition-all duration-300">BBQ Chicken</li>
              <li className="text-lg hover:text-[#CE2829] transition-all duration-300">Hawaiian</li>
              <li className="text-lg hover:text-[#CE2829] transition-all duration-300">Vegetarian</li>
              <li className="text-lg hover:text-[#CE2829] transition-all duration-300">Meat Lovers</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-3xl font-bold text-[#CE2829] mb-6">Instagram</h3>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://media.istockphoto.com/id/1442417585/tr/foto%C4%9Fraf/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=VZgayMOMy8LvHdwLXbeO2H0yK2_1jlBGGWmS6yQYvEQ="
                alt="Instagram 1"
                className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
              <img
                src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
                alt="Instagram 2"
                className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
              <img
                src="https://accademiastudioitalia.com/wp-content/uploads/2023/07/pizza.jpg"
                alt="Instagram 3"
                className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
              <img
                src="https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg"
                alt="Instagram 4"
                className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
              <img
                src="https://img.ye-mek.net/img/f1/karisik-pizza.jpg"
                alt="Instagram 5"
                className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
              <img
                src="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/napoli-pizza_.webp"
                alt="Instagram 6"
                className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
        </div>

       
        <div className="text-center mt-10 text-sm text-gray-400">
          <p>&copy; 2025 Delicious Pizza. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
