import logo from '../logo.svg';

const Home = () => {
    let title = "ReactJS";
    let description = "ReactJS is a javascript library that provides a simple interface for our Project";
    let person = {
        name: "Toby",
        gender: "male",
        age: 18,
        job: "Web developer"
    }
    return (
        <div>
            
            <h1>Welcome To {title.toUpperCase()}</h1>
            <h3>{description} </h3>
            <p className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quis ex dignissimos minus impedit ipsa voluptatum rerum culpa natus totam, commodi, itaque id, neque temporibus quidem autem unde animi facere.</p>

            <ul>
                <li>Name: {person.name}</li>
                <li>Gender: {person.gender}</li>
                <li>Age: {person.age}</li>
            </ul>
            <p>{person.name} is a {person.age} years old {person.job} </p>


            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Home;
