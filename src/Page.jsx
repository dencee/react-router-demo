import { useParams } from "react-router-dom"; 
import { Link } from 'react-router-dom'

export function Page() {
  const { id } = useParams();

  return (
    <>
      <h1>Page {id}</h1>
      <Link to="/">Back Home</Link>
    </>
  )
}