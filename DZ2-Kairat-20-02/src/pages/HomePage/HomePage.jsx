import { useLocation } from "react-router-dom"

function HomePage()
{
    const location = useLocation()
    console.log(location);
  return (
      <>
        <h2>Home Page</h2>
        <h3>DZ №2 Kairat, lets chek the page Photos</h3>
      </>
  )
}

export default HomePage