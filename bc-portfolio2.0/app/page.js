import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-500 to-black overflow-hidden">
      {/* Semi-transparent background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/background-image.jpg" // Replace with the path to your background image
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </div>

      {/* Top status bar simulation */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 bg-opacity-50"></div>

      {/* Logo and 'BC' initials */}
      <div className="absolute top-4 left-4 z-10 flex items-center">
        {/* Replace with your logo */}
        <Image
          src="/logo.png" // Replace with the path to your logo image
          width={50}
          height={50}
          alt="Logo"
        />
        <span className="text-white text-2xl font-semibold ml-2">BC</span>
      </div>

      {/* Main content card */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-20 rounded-xl p-8 text-center shadow-2xl z-10 w-5/6 md:w-1/2 2xl:w-1/3">
  <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">BC</h1>
  <h2 className="text-white text-4xl lg:text-xl font-bold mb-6">Personal Portfolio</h2>
  <p className="text-gray-300 mb-8">Insert your compelling personal statement here, and it will look amazing!</p>
  {/* Buttons */}
  <div className="flex justify-center space-x-4">
    <a href="#projects" className="bg-red-700 text-white py-2 px-4 rounded-full hover:bg-red-800 transition duration-300">Projects</a>
    <a href="#contact" className="bg-red-700 text-white py-2 px-4 rounded-full hover:bg-red-800 transition duration-300">Contact</a>
  </div>
</div>

      {/* Placeholder for bottom navigation/menu bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-900 bg-opacity-50"></div>
    </div>
  );
}
