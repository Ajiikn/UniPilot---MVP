export default function Item({ course, setCourse }) {
  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <label>Course Title:</label>
        <input
          type="text"
          name="courseTitle"
          value={course.courseTitle}
          onChange={handleChange}
        />
        <label>Credit Unit:</label>
        <select name="unit" value={course.unit} onChange={handleChange}>
          <option value="">--Select Credit Unit--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <label>Grade:</label>
        <select name="grade" value={course.grade} onChange={handleChange}>
          <option value="">--Select Grade--</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
      </form>
    </>
  );
}
