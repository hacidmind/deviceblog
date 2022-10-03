import {useState, useEffect} from 'react';

const UseCustomHook = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            // .then((data)=>console.log(data))
            .then((data) => {
                setIsLoading(false)
                setData(data)
            })
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
                console.log(error.message)
            })
    })
    return {data, isLoading, isError}
}

export default UseCustomHook;
