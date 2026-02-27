import { useEffect, useState } from "react";
import ItemTable from "./ItemTable";

export default function CourseForm() {
  const [courses, setCourses] = useState([]);

  const [course, setCourse] = useState({
    courseTitle: "",
    unit: "",
    grade: "",
  });

  const addCourse = () => {
    setCourses((prev) => [...prev, course]);
    setCourse({ courseTitle: "", unit: "", grade: "" });
  };

  const deleteCourse = (indexToDelete) => {
    setCourses(courses.filter((_, index) => index !== indexToDelete));
  };

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  return (
    <>
      <ItemTable
        course={course}
        setCourse={setCourse}
        addCourse={addCourse}
        deleteCourse={deleteCourse}
        courses={courses}
      />
      <button>Calculate CGPA</button>
    </>
  );
}
