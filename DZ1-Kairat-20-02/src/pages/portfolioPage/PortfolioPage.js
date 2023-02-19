import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './portfolio.module.css'

function PortfolioPage() {
    const navigate=useNavigate()
    const [photos,setPhotos]=useState([])
    const [update, setUpdate] = useState(false);
    const [url,setUrl]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(resp=>resp.json())
            .then(photos=>setPhotos(photos))
    }, [update])
    
    return(
        <div>
            <button onClick={()=>navigate(-1)}>go to back</button>
            <h1>Portfolio Page</h1>
            <button onClick={() => setUpdate(!update)}>update</button>
            <div className={styles.flex}>
                <div>{photos.slice(0, 10).map(photos =>
                    <div key={photos.id}>
                        <img src={photos.url} alt="" className={styles.image} />
                        <p>{photos.title}</p>
                        <button onClick={()=>setUrl(photos.url)}>узнать url фото</button>
                        <p>------------------------------</p>
                    </div>)}
                </div>
                <h2>url фото: {url}</h2>
            </div>
        </div>
    )
}

export default PortfolioPage