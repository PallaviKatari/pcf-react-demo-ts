import React from 'react';

function SpreadSyntax()
{
    const originalImage={
        src:"https://th.bing.com/th/id/OIP.yNOaibrXZ3bEEC8bfTkJtQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.56&pid=1.7",
        alt:"React Logo"
    };

    const formattedImage={
        ...originalImage,
        height:100,
        width:100
    }

    const user={
        name:"John Doe",
        age:30,
        designation:"Software Engineer",
        department:"Engineering"
    }

    const addProperty={
        ...user,
        isActive:true,
        email:"johndoe@example.com"
    }

    return(
        <div>
            <img src={formattedImage.src} alt={formattedImage.alt} height={formattedImage.height} width={formattedImage.width}/>
            <h2>User Details</h2>
            <p>Name: {addProperty.name}</p>
            <p>Age: {addProperty.age}</p>
            <p>Designation: {addProperty.designation}</p>
            <p>Department: {addProperty.department}</p>
            <p>Is Active: {addProperty.isActive ? "Yes" : "No"}</p>
            <p>Email: {addProperty.email}</p>
        </div>
    )
}

export default SpreadSyntax;

//users - 3 - new(Jane)