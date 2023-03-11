import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PhotoLink from "../../components/PhotoLink/PhotoLink"
import { getPhotos } from "../../store/photosSlice"


function HomePage()
{
    const dispatch = useDispatch()
    const {photos, preloader} = useSelector(state => state.photosReducer)
    
    useEffect(() => {
        dispatch(getPhotos())
    }, [])
    return (
        <>
            <h2>Photos</h2>
            {
                preloader ? <p>Loading...</p>
                    : 
                    <ol style={{ display: 'flex', flexDirection: 'column', gap: '10px'
                    }}>
                        {
                            photos.slice(0, 20).map(photo => (<PhotoLink key={photo.id} photoInfo={photo}/>))
                        }
                    </ol>
            }
        </>
    )
}

export default HomePage