import photos from "@/app/mock-data/photo"
import Frame from "@/app/components/Frame"
import Modal from "@/app/components/Modal"

export default function PhotoModal({ params: { id: photoId } }) {
    const photo = photos.find((p) => p.id === photoId)

    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    )
}
