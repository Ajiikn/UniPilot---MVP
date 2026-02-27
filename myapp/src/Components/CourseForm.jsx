import { useEffect, useState } from "react";
import ItemTable from "./ItemTable";

export default function CourseForm() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    courseTitle: "",
    unit: "",
    grade: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [tempCourses, setTempCourses] = useState({
    courseTitle: "",
    unit: "",
    grade: "",
  });
  const [cgpa, setCgpa] = useState(null);

  const addCourse = () => {
    setCourses((prev) => [...prev, course]);
    setCourse({ courseTitle: "", unit: "", grade: "" });
  };

  const deleteCourse = (indexToDelete) => {
    setCourses(courses.filter((_, index) => index !== indexToDelete));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTempCourses(courses[index]);
  };

  const handleSave = () => {
    const updatedCourses = [...courses];
    updatedCourses[editIndex] = tempCourses;
    setCourses(updatedCourses);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const gradeScale = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 };

  const calculateCGPA = (courses) => {
    if (courses.length === 0) return;

    let totalPoints = 0;
    let totalUnits = 0;

    courses.forEach((course) => {
      const gradePoint = gradeScale[course.grade];
      const unit = Number(course.unit) || 0;
      totalPoints += gradePoint * unit;
      totalUnits += unit;
    });

    const cgpa = totalPoints / totalUnits;
    return cgpa.toFixed(2);
  };

  useEffect(() => {
    console.log(courses);
    console.log();
  }, [courses]);

  return (
    <>
      <ItemTable
        course={course}
        setCourse={setCourse}
        addCourse={addCourse}
        deleteCourse={deleteCourse}
        courses={courses}
        editIndex={editIndex}
        tempCourses={tempCourses}
        setTempCourses={setTempCourses}
        handleEdit={handleEdit}
        handleCancel={handleCancel}
        handleSave={handleSave}
      />
      <button onClick={() => setCgpa(calculateCGPA(courses))}>
        Calculate CGPA
      </button>
      <p>{cgpa !== null && cgpa}</p>
    </>
  );
}
