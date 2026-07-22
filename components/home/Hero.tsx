export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <p className="uppercase tracking-[6px] text-blue-500">
          Senior UI/UX Designer
        </p>

        <h1 className="text-7xl font-bold mt-6">
          Pawan Kumar
        </h1>

        <p className="mt-6 text-gray-400 text-xl max-w-2xl mx-auto">
          Designing scalable digital products for FinTech, EdTech & SaaS.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700">
            View Projects
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}