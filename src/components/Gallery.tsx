import { useEffect } from "react";
import "lazysizes";
export default function Gallery({ images }: { images: string[] }) {
    return (
        <div className="gallery">
            {images.map((src) => (
                <img key={src} data-src={src} className="lazyload" alt="obra" />
            ))}
        </div>
    );
}
