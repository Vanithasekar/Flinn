import { useEffect, useState } from "react";
import "./StudentList-block.css";
const Dummyurl = "https://jsonplaceholder.typicode.com/users";
type Marks={
    Tamil:Number;
    English:Number;
    Maths:Number;
    Science:Number;
    Social:Number;
}
type Student = {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
    Marks:Number;
};

const StudentList=()=> {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    const MarkList=[
    {Tamil:80,English:70,Maths:50,Science:90,Social:75},
    {Tamil:50,English:97,Maths:80,Science:85,Social:60}
    ]
   
    useEffect(() => {
        fetch(Dummyurl)
      
        .then((res) => res.json())
        .then((data: Student[]) => {
            setStudents(data);
            setLoading(false);
        })
        .catch(() => {
            setStudents([]);
            setLoading(false);
        });
    },
);
if (loading) 
    return <div>Loading...........................</div>;
if (students.length==0)
    return <div>No data found</div>;
return (
<div className="student-list" >
    <h2>Student List</h2>
    <table className="student-list-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>School</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Maths</th>
                <th>Science</th>
                <th>Social</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {students.map((student, index) => {
                const m =MarkList[index] || {Tamil: 0,English: 0,Maths: 0,Science: 0,Social: 0};
                const total =m.Tamil + m.English + m.Maths + m.Science + m.Social; 
                return (
                <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.company.name}</td>
                <td>{m.Tamil}</td>
                <td>{m.English}</td>
                <td>{m.Maths}</td>
                <td>{m.Science}</td>
                <td>{m.Social}</td>

                <td>{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;









