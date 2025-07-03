type Props = {
  src: string;
};

export const Video = ({ src }: Props) => (
  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
    <iframe
      src={src}
      title="Vídeo incorporado"
      allowFullScreen
      className="w-full h-full border-0"
    />
  </div>
);
