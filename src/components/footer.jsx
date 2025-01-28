import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="info">
            <h2 className="title">Delicious Pizza</h2>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <p>123 Pizza Street, Pizzaville</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <p>contact@deliciouspizza.com</p>
            </div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <p>(123) 456-7890</p>
            </div>
          </div>

          <div className="menu">
            <h3 className="title">HOT-Menu</h3>
            <ul>
              <li>Margherita</li>
              <li>Pepperoni</li>
              <li>BBQ Chicken</li>
              <li>Hawaiian</li>
              <li>Vegetarian</li>
              <li>Meat Lovers</li>
            </ul>
          </div>

          <div className="instagram">
            <h3 className="title">Instagram</h3>
            <div className="instagram-grid">
              <img
                src="https://media.istockphoto.com/id/1442417585/tr/foto%C4%9Fraf/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=VZgayMOMy8LvHdwLXbeO2H0yK2_1jlBGGWmS6yQYvEQ="
                alt="Instagram 1"
              />
              <img
                src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
                alt="Instagram 2"
              />
              <img
                src="https://accademiastudioitalia.com/wp-content/uploads/2023/07/pizza.jpg"
                alt="Instagram 3"
              />
              <img
                src="https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg"
                alt="Instagram 4"
              />
              <img
                src="https://img.ye-mek.net/img/f1/karisik-pizza.jpg"
                alt="Instagram 5"
              />
              <img
                src="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/napoli-pizza_.webp"
                alt="Instagram 6"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Delicious Pizza. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
