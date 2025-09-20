import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-inter p-8">
      {/* Video above H1, plain */}
      <video
        src="/assets/404-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-lg mb-8"
      />

      {/* Text content */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Oops! The page you were looking for doesn't exist.
      </h1>
      <p className="text-gray-500 mb-6 text-center">
        Don&apos;t worry, try navigating back home.
      </p>
      <Link
        to="/"
        className="px-6 py-3  text-red-500 font-extrabold text-lg transition-colors"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;
