import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/student/courses', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Your Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default StudentDashboard;
