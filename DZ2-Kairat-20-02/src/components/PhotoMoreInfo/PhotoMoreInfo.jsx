import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function PhotoMoreInfo()
{
    const { id } = useParams()
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const [photo, setPhoto] = useState({})

    const getMoreInfo = async () =>
    {
        try {
            setLoader(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            if (response.status >= 200 && response.status <= 204) {
                const photoRespons = await response.json()
                setPhoto(photoRespons)
                console.log(photoRespons)
                return
            }
            throw `Error: ${response.status}`
        } catch (error) {
            setError(error)
            setPhoto({})
        }
        finally {
            setLoader(false)
        }
    }

    useEffect(() =>
    {
        getMoreInfo()
    }, [])

  return (
    <>
        <button onClick={()=>navigate(-1)}>back</button>
        {
            loader ? <h3>Loading...</h3> 
            : error ? <h3>{error} user not found</h3>
                :
                <>        
                    <h2>{photo.title}</h2>
                    <img src={photo.url} alt="" />    
                    <h5>url: {photo.thumbnailUrl}</h5>
                          
                </>        
            }
        </>
  )
}

export default PhotoMoreInfo