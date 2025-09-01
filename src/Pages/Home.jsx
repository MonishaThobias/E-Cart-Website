import { NavLink } from "react-router";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <>
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Store 🛍️
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Shop now and enjoy a seamless experience.
          </p>
          <NavLink to='/products'
           className="bg-white text-blue-800 hover:bg-gray-100 font-semibold px-6 py-3 rounded-2xl shadow-md">
            Shop Now

          </NavLink>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">🚀 Fast Delivery</h3>
            <p className="text-gray-600">
              Get your products delivered quickly with our trusted shipping partners.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">💳 Secure Payment</h3>
            <p className="text-gray-600">
              Shop with confidence using our safe and reliable payment system.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">⭐ Quality Products</h3>
            <p className="text-gray-600">
              Browse only the best products handpicked for you.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of happy customers today.
          </p>
          <NavLink className="bg-blue-800 hover:bg-blue-800 text-white px-8 py-3 rounded-2xl shadow-md" to='/products'>
 Get Started
          </NavLink>
          
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Home;
