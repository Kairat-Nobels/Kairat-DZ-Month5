import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"




function PhotoPage()
{
    const navigate = useNavigate()
    const { id } = useParams()
    const { photos } = useSelector(state => state.photosReducer)
    const photo = photos.find(photo => photo.id === parseInt(id))
    return (
        <>
            <button onClick={()=> navigate(-1)}>back</button>
            {
                photo? (
                    <>
                        <h2>{photo.title}</h2>
                        <p>id: {photo.id}</p>
                        <img style={{width: '300px'}} src={photo.url} alt={photo.title} />
                    </>
                ) : (
                    <h1>Photo not found</h1>
                )
            }
        </>
    )
}

export default PhotoPage