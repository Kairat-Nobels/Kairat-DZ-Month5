import { Link } from "react-router-dom";
import styles from './photolink.module.css'
function PhotoLink({ photoInfo })
{
  return (
    <>
      <img src={photoInfo.url} className={styles.image} alt="" />
      <p>{photoInfo.title}</p>                
      <Link to={`/photos/${photoInfo.id}`} >more info</Link>
      <p>------------------------------</p>
             
    </>
  )
}

export default PhotoLink