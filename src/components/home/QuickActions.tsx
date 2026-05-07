export default function QuickActions() {
  const actions = [
    "Find Doctor",
    "Book Appointment",
    "Emergency",
    "Health Packages",
  ];

  return (
    <section className="relative lg:-mt-14 z-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">

        {actions.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:-translate-y-1 transition"
          >
            <p className="font-semibold text-sm sm:text-base text-gray-700">
              {item}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}