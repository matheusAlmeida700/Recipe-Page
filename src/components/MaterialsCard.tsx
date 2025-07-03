type Props = {
  materials: string[];
};

export const MaterialsCard = ({ materials }: Props) => (
  <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 order-2 lg:order-1">
    <div className="bg-blue-600 rounded-lg p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-center">Materiais</h3>
      <ul className="space-y-2 text-sm">
        {materials.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </div>
  </div>
);
