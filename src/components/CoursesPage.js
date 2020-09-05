import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";

function CoursesPage() {

    const [ courses, setCourses ] = useState([]);

    useEffect(() => {
        getCourses().then((_courses) => setCourses(_courses));
    }, []);

    return <>
    <h2> Courses </h2>
    <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            { courses.map((courses) => {
                return <tr key={ courses.id }>
                    <td>{ courses.title }</td>
                    <td>{ courses.authorId }</td>
                    <td>{ courses.category }</td>
                </tr>
            })}
        </tbody>
    </table>
    </>    
}

export default CoursesPage;