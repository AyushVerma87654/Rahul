import { FC } from "react";

type ImagesProps = {
  src: string;
  alt: string;
  className?: string;
};

const Images: FC<ImagesProps> = ({ src, alt, className }) => {
  return (
    <div className="flex items-center justify-center">
      <img src={src} alt={alt} className={` ` + className}></img>
    </div>
  );
};

export default Images;
