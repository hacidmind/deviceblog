import { useState } from 'react';
import {useNavigate}  from "react-router-dom"

const NewDevice = () => {
    const [title, setTitle] = useState('');
    const [coo, setCoo] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`${title} ${coo} ${body}`)
        const blog = { title, coo, body }
        // console.log(blog);
        fetch('https://my-json-server.typicode.com/hacidmind/deviceDb/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false)
            navigate('/blog')
        })
    }
    return (
        <div>
            <h2 className="text-center">Add New Device</h2>
            <form className="container" onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                    <label  className="form-label">Device Name</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Made In</label>
                    <input type="text" className="form-control" value={coo} onChange={(e) => setCoo(e.target.value)}  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea className="form-control" rows="3" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
               
                
                <div className="d-grid gap-2">
                    {!isLoading && <button type="submit" className="btn btn-primary">Submit</button>}
                    {isLoading && <button disabled type="submit" className="btn btn-primary">Submitting</button>}
                
                </div>
            </form>
        </div>
    );
}

export default NewDevice;
