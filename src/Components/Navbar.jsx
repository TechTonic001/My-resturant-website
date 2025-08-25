import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaStar, FaHeart, FaBars, FaTimes, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
    const [cartItems, setCartItems] = useState(3);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    // Sample food data
    const foodItems = [
        {
            id: 1,
            name: "Margherita Pizza",
            description: "Classic tomato sauce and mozzarella",
            price: 12.99,
            rating: 4.8,
            category: "pizza",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            name: "Beef Burger",
            description: "Juicy beef patty with fresh vegetables",
            price: 9.99,
            rating: 4.5,
            category: "burger",
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            name: "Caesar Salad",
            description: "Fresh romaine with Caesar dressing",
            price: 8.99,
            rating: 4.3,
            category: "salad",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            name: "Sushi Platter",
            description: "Assorted fresh sushi and sashimi",
            price: 24.99,
            rating: 4.9,
            category: "sushi",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            name: "Chicken Wings",
            description: "Crispy wings with your choice of sauce",
            price: 10.99,
            rating: 4.6,
            category: "appetizer",
            image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            name: "Chocolate Cake",
            description: "Rich chocolate layered cake",
            price: 6.99,
            rating: 4.7,
            category: "dessert",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        }
    ];

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'pizza', name: 'Pizza' },
        { id: 'burger', name: 'Burgers' },
        { id: 'salad', name: 'Salads' },
        { id: 'sushi', name: 'Sushi' },
        { id: 'appetizer', name: 'Appetizers' },
        { id: 'dessert', name: 'Desserts' }
    ];

    const filteredItems = activeCategory === 'all'
        ? foodItems
        : foodItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <headerx className="bg-white shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-blue-500">FoodExpress</span>
                        </div>

                        {/* Location */}
                        {/* <div className="hidden md:flex items-center space-x-2 text-gray-700">
                            <FaMapMarkerAlt className="text-blue-500" />
                            <span>123 Food Street, City</span>
                        </div> */}

                        {/* Search Bar */}
                        <div className="hidden md:flex flex-1 mx-10">
                            <div className="relative w-full max-w-xl">
                                <input
                                    type="text"
                                    placeholder="Search for food..."
                                    className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <FaSearch className="absolute right-3 top-3 text-gray-400" />
                            </div>
                        </div>

                        <div className='gap-4 flex mr-50 hidden md:flex'>
                            <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
                            <a href="#menu" className="text-gray-700 hover:text-blue-500">Menu</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <FaShoppingCart className="text-2xl text-gray-700" />
                                {cartItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                        {cartItems}
                                    </span>
                                )}
                            </div>
                            <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                                Sign In
                            </button>
                            <button
                                className="md:hidden text-gray-700"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="mt-4 md:hidden">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for food..."
                                className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <FaSearch className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white py-4 px-4 border-t">
                        <nav className="flex flex-col space-y-3">
                            <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
                            <a href="#menu" className="text-gray-700 hover:text-blue-500">Menu</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition w-full">
                                Sign In
                            </button>
                        </nav>
                    </div>
                )}
            </headerx>

            {/* Hero Section */}
            <section className="bg-blue-500 text-white py-16" id='home'>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Delicious food delivered to you</h1>
                    <p className="text-xl mb-8">Enjoy restaurant favorites from the comfort of your home</p>
                    <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                        Order Now
                    </button>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
                    <div className="flex overflow-x-auto pb-4 space-x-4">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`px-6 py-2 rounded-full whitespace-nowrap ${activeCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Food Items */}
            <section className="py-12 bg-gray-50" id='menu'>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Popular Dishes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map(item => (
                            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                                        <FaHeart className="text-gray-400 hover:text-red-500 transition" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold">{item.name}</h3>
                                        <span className="text-blue-500 font-bold">${item.price}</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar className="text-gray-300" />
                                            </div>
                                            <span className="ml-2 text-gray-600">{item.rating}</span>
                                        </div>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Download */}
            <section className="py-16 bg-blue-500 text-white" id='about'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold mb-4">Get the app</h2>
                            <p className="text-xl mb-6">Order food easily using our mobile app</p>
                            <div className="flex space-x-4">
                                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                                    <div className="mr-2">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.924 17.315c-.057.174-.193.332-.348.367-.156.035-.343-.047-.483-.184-.725-.827-1.089-1.18-1.865-1.975-.174-.179-.248-.228-.446-.228-.198 0-.272.049-.446.228-.776.795-1.14 1.148-1.865 1.975-.14.137-.327.219-.483.184-.155-.035-.291-.193-.348-.367-.057-.174-.038-.366.045-.532.71-1.447 1.071-2.077 1.809-3.084.198-.274.57-.411.942-.411.372 0 .744.137.942.411.738 1.007 1.099 1.637 1.809 3.084.083.166.102.358.045.532zm-6.968-12.158c-2.288 0-4.579 1.536-4.579 4.979 0 3.442 2.291 5.333 4.579 5.333s4.579-1.891 4.579-5.333c0-3.443-2.291-4.979-4.579-4.979zm7.725 16.843h-15.362c-.755 0-1.368-.613-1.368-1.368v-15.362c0-.755.613-1.368 1.368-1.368h15.362c.755 0 1.368.613 1.368 1.368v15.362c0 .755-.613 1.368-1.368 1.368zm-7.725-19.151c-4.079 0-7.368 3.29-7.368 7.368s3.289 7.368 7.368 7.368 7.368-3.29 7.368-7.368c0-4.078-3.289-7.368-7.368-7.368z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs">Download on the</div>
                                        <div className="font-bold">App Store</div>
                                    </div>
                                </button>
                                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                                    <div className="mr-2">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4.868 0c-.83 0-1.493.663-1.493 1.493v21.014c0 .83.663 1.493 1.493 1.493h14.264c.83 0 1.493-.663 1.493-1.493v-21.014c0-.83-.663-1.493-1.493-1.493h-14.264zm7.132 20.507c-.691 0-1.251-.56-1.251-1.251s.56-1.251 1.251-1.251 1.251.56 1.251 1.251-.56 1.251-1.251 1.251zm6.75-15.014h-13.5v12.014h13.5v-12.014z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs">GET IT ON</div>
                                        <div className="font-bold">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                alt="Mobile app"
                                className="rounded-lg shadow-xl w-64"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12" id='contact'>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">FoodExpress</h3>
                            <p className="text-gray-400">Delicious food delivered to your door</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                                <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
                                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contact Us</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>123 Food Street, City</li>
                                <li>info@foodexpress.com</li>
                                <li>+1 (123) 456-7890</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Newsletter</h4>
                            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none"
                                />
                                <button className="bg-blue-500 px-4 py-2 rounded-r hover:bg-blue-600 transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 FoodExpress. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Navbar;