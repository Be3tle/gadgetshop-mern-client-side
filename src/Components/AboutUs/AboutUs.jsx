import { Link } from "react-router-dom";

const AboutUS = () => {
  return (
    <div className="hero min-h-screen bg-gray-800 text-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-photo/new-smartwatch-balancing-with-hand_23-2150296477.jpg?w=1060&t=st=1704546742~exp=1704547342~hmac=ee3b03939189a2d859093cd6ed0f16cf5413fc793666e185aca8283d5ed22327"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Elevate Your Tech Game with{' '}
            <span className="text-cyan-500">Electon</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to='/login'>
            <button className="btn border-0 bg-cyan-500 hover:bg-cyan-700 text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
