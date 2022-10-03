import { useParams, useNavigate} from 'react-router-dom';
import useFetch from "../useCustomHook";
import Spinner from 'react-bootstrap/Spinner';



const BlogPage = () => {
    const { id } = useParams()
    const { data: laptop, isLoading, isError } = useFetch(`https://my-json-server.typicode.com/hacidmind/deviceDb/blogs/${id}`)
    const navigate = useNavigate()
    const handledelete = () => {
        fetch(`https://my-json-server.typicode.com/hacidmind/deviceDb/blogs/${id}`, {
            method: "DELETE"
        }).then(() => {
            navigate("/blog")
        })
    }
    return (
        <div>
            <div className="text-center">
                {isLoading ? <Spinner animation="border" role="status" >
                    <span className="visually-hidden text-center">Loading...</span>
                </Spinner> : ""}
            </div>

            {isError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>OH NO!</strong> Error Fetching Data.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
            {
                laptop && (
                    <article className="container">
                        <h2>{laptop.title}</h2>
                        <button className="btn btn-danger float-end" onClick={handledelete}>Delete</button>
                        <div>
                            <i className="text-info">{laptop.coo}</i>
                        </div>

                        <img src={laptop.pix} alt={laptop.title} />
                        <p className="text-justify">{laptop.body}</p>
                    </article>
                )
            }
            
        </div>
    );
}

export default BlogPage;
