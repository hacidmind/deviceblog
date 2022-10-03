import { useState } from 'react';

import merc from "../img/benz.jpg";
import rav4 from "../img/rav4.jpg";
import gv90 from "../img/gv90.jpg";
import xc90 from "../img/xc90.jpg";
import CarList from './CarList';

const Car = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Mercedes CLA",
            body: "The redesigned CLA-Class does well to ape the drama of its predecessor. The roofline drapes just right, the grille tips up just so, the tail draws it all to a neat conclusion at just the right time. The elegance comes at an interior-space price—but at least Mercedes has upped the CLAs cabin game, with wide-screen displays, 64-color ambient lighting, higher-grade materials, and a more playful sense of style. Performance fires up in the form of a 221-horsepower turbo- 4 in the CLA250, and rises to 302 hp in the CLA35 AMG or 382 hp in the CLA45 AMG.In the CLA250 and CLA35, a 7 - speed twin - clutch transmission snicks off cleaner shifts, and available all - wheel drive can now route power dynamically to the back wheels when the fronts lose their contact patch. (The CLA45 AMG uses an 8 - speed dual clutch.) The milestone achievement, though, is the CLAs new adaptive dampers",
            coo: `Germany`,
            pix: merc
        },
        {
            id: 2,
            title: "Toyota RAV4",
            body: "The redesigned CLA-Class does well to ape the drama of its predecessor. The roofline drapes just right, the grille tips up just so, the tail draws it all to a neat conclusion at just the right time. The elegance comes at an interior-space price—but at least Mercedes has upped the CLAs cabin game, with wide-screen displays, 64-color ambient lighting, higher-grade materials, and a more playful sense of style. Performance fires up in the form of a 221-horsepower turbo- 4 in the CLA250, and rises to 302 hp in the CLA35 AMG or 382 hp in the CLA45 AMG.In the CLA250 and CLA35, a 7 - speed twin - clutch transmission snicks off cleaner shifts, and available all - wheel drive can now route power dynamically to the back wheels when the fronts lose their contact patch. (The CLA45 AMG uses an 8 - speed dual clutch.) The milestone achievement, though, is the CLAs new adaptive dampers",
            coo: "Japan",
            pix: rav4
        },
        {
            id: 3,
            title: "Volvo XC90",
            body: "The redesigned CLA-Class does well to ape the drama of its predecessor. The roofline drapes just right, the grille tips up just so, the tail draws it all to a neat conclusion at just the right time. The elegance comes at an interior-space price—but at least Mercedes has upped the CLAs cabin game, with wide-screen displays, 64-color ambient lighting, higher-grade materials, and a more playful sense of style. Performance fires up in the form of a 221-horsepower turbo- 4 in the CLA250, and rises to 302 hp in the CLA35 AMG or 382 hp in the CLA45 AMG.In the CLA250 and CLA35, a 7 - speed twin - clutch transmission snicks off cleaner shifts, and available all - wheel drive can now route power dynamically to the back wheels when the fronts lose their contact patch. (The CLA45 AMG uses an 8 - speed dual clutch.) The milestone achievement, though, is the CLAs new adaptive dampers",
            coo: "Sweden",
            pix: xc90
        },
        {
            id: 4,
            title: "Genesis GV90",
            body: "The redesigned CLA-Class does well to ape the drama of its predecessor. The roofline drapes just right, the grille tips up just so, the tail draws it all to a neat conclusion at just the right time. The elegance comes at an interior-space price—but at least Mercedes has upped the CLAs cabin game, with wide-screen displays, 64-color ambient lighting, higher-grade materials, and a more playful sense of style. Performance fires up in the form of a 221-horsepower turbo- 4 in the CLA250, and rises to 302 hp in the CLA35 AMG or 382 hp in the CLA45 AMG.In the CLA250 and CLA35, a 7 - speed twin - clutch transmission snicks off cleaner shifts, and available all - wheel drive can now route power dynamically to the back wheels when the fronts lose their contact patch. (The CLA45 AMG uses an 8 - speed dual clutch.) The milestone achievement, though, is the CLAs new adaptive dampers",
            coo: "Korea",
            pix: gv90
        }
    ])
    const handleDelete = (id) => {
        let deleteBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(deleteBlog)
    }
    return (
        <div>
            <CarList blogs={blogs} handleDeletes={handleDelete} />
        </div>
    );
}

export default Car;
