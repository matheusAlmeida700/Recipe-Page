import { useParams } from "react-router-dom";
import { data } from "../data/data";
import { MaterialsCard } from "@/components/MaterialsCard";
import { Video } from "@/components/Video";

const RecipePage = () => {
  const { id } = useParams();
  const page = data.find((p) => p.id === id);

  if (!page) return <div className="text-white">Conteúdo não encontrado</div>;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top Section */}
      <section className="px-4 py-12 md:px-8 lg:px-16 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            {page.topSection.title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <p className="text-base leading-relaxed text-justify whitespace-pre-line">
                {page.topSection.text}
              </p>
            </div>

            <div className="w-full lg:w-64 flex-shrink-0">
              <img
                src={page.topSection.image}
                alt={page.topSection.imageAlt}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-4 py-12 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {page.bottomSection.title}
          </h2>
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <MaterialsCard materials={page.bottomSection.materials} />
            <div className="flex-1">
              <p className="text-base leading-relaxed text-justify whitespace-pre-line">
                {page.bottomSection.text}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Modo de Preparo
            </h3>
            <ul className="space-y-4">
              {page.bottomSection.steps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 py-3 border-b border-slate-200"
                >
                  <div className="min-w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-base leading-snug mt-1">{step}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Video */}
          <div className="mt-12">
            <Video src={page.bottomSection.video} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipePage;
