import Item from "./Item";

export default function ItemTable({
  course,
  setCourse,
  addCourse,
  deleteCourse,
  courses,
}) {
  return (
    <>
      <Item course={course} setCourse={setCourse} />
      <button
        onClick={addCourse}
        disabled={!course.courseTitle || !course.unit || !course.grade}
      >
        Add Course
      </button>
      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Unit</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.courseTitle}</td>
              <td>{course.unit}</td>
              <td>{course.grade}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteCourse(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
