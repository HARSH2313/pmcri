export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#062C43] text-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    <div className="bg-gray-800 h-[400px] rounded-2xl"></div>

    <div>
      <h2 className="text-3xl font-bold">
        Why Choose Pinnacle
      </h2>

      <p className="mt-4 text-gray-300">
        We combine advanced medical technology with compassionate care.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6">

        {["15+ Specialists", "24/7 Emergency", "10K+ Patients", "100% Care"].map((item, i) => (
          <div key={i} className="bg-white text-black p-5 rounded-xl shadow">
            {item}
          </div>
        ))}

      </div>
    </div>
  </div>
</section>
  );
}