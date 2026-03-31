// src/App.js

// Імпорт основної бібліотеки React
import React, { useState } from 'react';
// Імпорт компонентів для маршрутизації: Router, Routes, Route
// BrowserRouter (перейменований на Router) забезпечує маршрутизацію через URL браузера.
// Routes об'єднує визначення маршрутів.
// Route визначає окремий маршрут з відповідним компонентом.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Імпорт компонентів сторінок, що використовуються в маршрутизації
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AdminPage from './pages/AdminPage';
// Імпорт глобальних CSS стилів для всього додатку
import './styles/globals.css';

// Імпорт компонентів макета (шапки та футера), які використовуються на головній сторінці
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Імпорт компонентів секцій, які складають головну сторінку
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import WhyUs from './components/sections/WhyUs';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import ContactForm from './components/sections/ContactForm';

// Імпорт компонента логіну для адмінки
import AdminLogin from './components/shared/AdminLogin';

/**
 * Компонент HomePage.
 * Збирає всі секції для відображення головної сторінки сайту.
 * @returns {JSX.Element} JSX-розмітка головної сторінки.
 */
const HomePage = () => {
    return (
        <>
            {/* Компоненти, що формують структуру головної сторінки */}
            <Header />
            <Hero />
            <AboutUs />
            <WhyUs />
            <Services />
            <Testimonials />
            <ContactForm />
            <Footer />
        </>
    );
};

/**
 * Головний компонент додатка.
 * Налаштовує маршрутизацію, визначаючи, який компонент сторінки
 * буде відображатися залежно від URL.
 * @returns {JSX.Element} JSX-розмітка кореневого компонента додатку.
 */
function App() {
    const [isAdmin, setIsAdmin] = useState(false); // Стан авторизації адміністратора

    return (
        // Обгортаємо весь додаток в Router для ввімкнення маршрутизації
        <Router>
            {/* Routes - це контейнер для всіх визначених маршрутів */}
            <Routes>
                {/* Визначення маршруту для кореневого шляху ("/") - це буде HomePage */}
                <Route path="/" element={<HomePage />} />
                {/* Маршрути для інших сторінок додатку */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                {/* Логіка для входу в адмінку: якщо авторизовано — AdminPage, інакше — AdminLogin */}
                <Route
                    path="/admin"
                    element={
                        isAdmin ? (
                            <AdminPage />
                        ) : (
                            <AdminLogin onLogin={() => setIsAdmin(true)} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

// Експорт компонента App за замовчуванням для використання в точці входу додатка (наприклад, index.js)
export default App;
