export default function QuickActions() {
  const actions = [
    "Find Doctor",
    "Book Appointment",
    "Emergency",
    "Health Packages",
  ];

  return (
    <section className="-mt-14 relative z-20">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 px-4">

    {["Find Doctor", "Book Appointment", "Emergency", "Health Packages"].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition border"
      >
        <p className="font-semibold text-gray-800">{item}</p>
      </div>
    ))}

  </div>
</section>
  );
}