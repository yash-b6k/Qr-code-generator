import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-blue-100">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Welcome to QR Code Generator.ig 🚀
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Generate, customize, and manage your QR codes with ease. 
            Fast, secure, and reliable for your business or personal needs.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>

        <section className="py-16 px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Create QR Codes</h3>
            <p className="text-gray-600">
              Generate QR codes instantly with multiple customization options.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Track Analytics</h3>
            <p className="text-gray-600">
              Monitor scans and insights to boost your marketing strategy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">
              Keep your QR codes safe and always accessible across devices.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
