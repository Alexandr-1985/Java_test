import React from  'react';

export function CoursesTable(props) {
    function remove(id) {
        if(window.confirm('you are going to remove Courses ' + 'with id=' + id)) {
            props.removeFn(id);
        }
    }

    const coursesTableRecords = props.courses.map ((courses) => {
            return <tr key={courses.id}>
                         <td>{courses.id}</td>
                         <td>{courses.emailAddress}</td>
                         <td>{courses.name}</td>

                         <td>{courses.salary}</td>
                         <td>{courses.title}</td>
                   <td>
                        <i className="fa fa-trash" style={{cursor: 'pointer'}} onClick={remove.bind(this, courses.id)}></i>
                   </td>
            </tr>
        });
   // <td>{courses.gender}</td>
    return <table className="table">
        <thead>
        <tr>
            <th>id</th>
            <th>emailAddress</th>
            <th>name</th>

            <th>salary</th>
            <th>title</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {coursesTableRecords}
        </tbody>
    </table>
}
// <th>gender</th>