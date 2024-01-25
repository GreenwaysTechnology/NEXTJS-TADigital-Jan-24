import Frame from "@/app/components/Frame";
import photos from "@/app/mock-data/photo";
import Image from 'next/image'

export default function PhotoPage({ params: { id } }) {
    const photo = photos.find(p => p.id === id)
    return <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border border-gray-700">
            {/* <Image
                alt=""
                src={photo.imageSrc}
                height={500}
                width={500}
                className="w-full object-cover aspect-square"
            /> */}
            <Frame photo={photo} />
        </div>
    </div>
}