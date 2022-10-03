// import { useState, useEffect } from 'react';

// const Staff = () => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((response) => response.json())
//             // .then((data)=>console.log(data))
//             .then((data) => setData(data))
//     })
//     return (
//         <div>
//             <h1>Staff Data</h1>
//             {
//                 data.map((item) => (
//                     <div key={item.id}>
//                         <h2>{item.title}</h2>
//                         <p>{item.body}</p>
// <hr />
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }

// export default Staff;

import { useState, useEffect } from 'react';

const Staff = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            // .then((data)=>console.log(data))
            .then((data) => setData(data))
    })
    return (
        <div>
            <h1>Staff Data</h1>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <p><b>Staff Name:</b> {item.name}</p>
                        <p><b>Staff Email:</b> {item.email}</p>
                        <p><b>Company Address:</b> {item.company.name}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Staff;
