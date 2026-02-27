import Item from "./Item";

export default function ItemTable({
  course,
  setCourse,
  addCourse,
  deleteCourse,
  courses,
  tempCourses,
  setTempCourses,
  editIndex,
  handleEdit,
  handleCancel,
  handleSave,
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
          {courses.map((course, index) =>
            index === editIndex ? (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={tempCourses.courseTitle}
                    onChange={(e) => {
                      setTempCourses({
                        ...tempCourses,
                        courseTitle: e.target.value,
                      });
                    }}
                  />
                </td>
                <td>
                  <select
                    value={tempCourses.unit}
                    onChange={(e) => {
                      setTempCourses({ ...tempCourses, unit: e.target.value });
                    }}
                  >
                    <option value="">--Select Credit Unit--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </td>
                <td>
                  <select
                    value={tempCourses.grade}
                    onChange={(e) => {
                      setTempCourses({ ...tempCourses, grade: e.target.value });
                    }}
                  >
                    <option value="">--Select Grade--</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                </td>
                <td>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{course.courseTitle}</td>
                <td>{course.unit}</td>
                <td>{course.grade}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => deleteCourse(index)}>Delete</button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
}
