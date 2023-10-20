const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-12">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="section-heading text-4xl mb-6">Why Choose Electon?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature p-6 rounded-lg shadow-lg">
            <div className="feature-icon text-blue-900 mb-4">
              <i className="fas fa-check-circle fa-3x"></i>
            </div>
            <h3 className="feature-heading text-2xl mb-2 font-bold">
              Top Brands
            </h3>
            <p className="feature-description text-lg">
              We offer a curated selection of electronic gadgets from the top
              brands in the industry.
            </p>
          </div>
          <div className="feature p-6 rounded-lg  shadow-lg">
            <div className="feature-icon text-blue-900 mb-4">
              <i className="fas FaTruck fa-3x"></i>
            </div>
            <h3 className="feature-heading text-2xl mb-2 font-bold">
              Fast Shipping
            </h3>
            <p className="feature-description text-lg">
              Enjoy speedy and reliable shipping options to get your gadgets
              delivered in no time.
            </p>
          </div>
          <div className="feature p-6 rounded-lg  shadow-lg">
            <div className="feature-icon text-blue-900 mb-4">
              <i className="fas fa-heart fa-3x"></i>
            </div>
            <h3 className="feature-heading text-2xl mb-2 font-bold">
              Quality Assurance
            </h3>
            <p className="feature-description text-lg">
              We stand by the quality of our products and ensure that you
              receive only the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
