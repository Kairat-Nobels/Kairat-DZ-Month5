import { useEffect, useState } from "react"
import PhotoLink from "../../components/PhotoLink/PhotoLink"


function PhotosPage()
{
    const [photos, setPhotos] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    const getusers = async () =>
    {
    try {
      setLoader(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        console.log(response);
        
        if (response.status >= 200 && response.status <= 204) { 
            const usersResponse = await response.json()
            setPhotos(usersResponse)
        }
        else throw `Error: ${response.status}`
    } catch (error) {
        setError(error)
        setPhotos([])
    } finally {
        setLoader(false)
    }
    }

    useEffect(() =>
    {
        getusers()
    }, [])
    
    return (
        
        <>
            <h2>Photos page</h2>
        {loader ? <h3>Loading...</h3>
        :
        error ? <h3>{error} not found error</h3>
        :
                  
        photos.slice(0, 10).map(photo => <PhotoLink key={photo.id} photoInfo={photo} />)
        
        }
    </>
    )
}

export default PhotosPage