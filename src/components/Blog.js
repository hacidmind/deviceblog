import BlogList from './BlogList';
import Spinner from 'react-bootstrap/Spinner';
import useCustomHook from '../useCustomHook';



const Blog = () => {
    const { data: blogs, isLoading, isError } = useCustomHook("https://my-json-server.typicode.com/hacidmind/deviceDb/blogs")
    return (
        <div>
            {
                blogs && <BlogList blogs={blogs} />
            }
            <div className="text-center">
            {isLoading ? <Spinner animation="border" role="status" >
            <span className="visually-hidden text-center">Loading...</span>
            </Spinner>      : ""}
            </div>

            {isError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>OH NO!</strong> Error Fetching Data.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}

        </div>
    );
}

export default Blog;
