let student = {
    name: "Neelesh",
    age: 23,
    course: "computer science",
    grades: {
      math: 85,
      science: 90,
      english: 78
    },
    address: {
      city: "hyderabad",
      zip: "500072"
    }
  };
  
  console.log("Student Name:", student.name);
  console.log("Course:", student.course);
  console.log("Science Grade:", student.grades.science);
  console.log("City:", student.address.city);
  
  student.grades.math = 95;
  student.isGraduated = false;
  student.grades.history = 88;
  student.address.city = "hyderabad";
  delete student.address.zip;
  
  console.log("Updated Student Object:", student);
  
  let students = [
    {
      name: "ram",
      age: 22,
      course: "Mathematics",
      grades: { math: 92, science: 85, english: 80 },
      address: { city: "hyderabad", zip: "500072" }
    },
    {
      name: "lokesh",
      age: 21,
      course: "Physics",
      grades: { math: 78, science: 88, english: 74 },
      address: { city: "hyderabad", zip: "500072" }
    },
    {
      name: "Chitti",
      age: 23,
      course: "Engineering",
      grades: { math: 89, science: 76, english: 85 },
      address: { city: "hyderabad", zip: "500072" }
    }
  ];
  
  students.push({
    name: "David",
    age: 20,
    course: "Biology",
    grades: { math: 82, science: 79, english: 88 },
    address: { city: "hyderabad", zip: "500072" }
  });
  
  let studentToUpdate = students.find(s => s.name === "lokesh");
  if (studentToUpdate) studentToUpdate.age = 22;
  
  students = students.filter(s => s.name !== "Chitti");
  
  let studentDetails = students.find(s => s.name === "ram");
  console.log("Student Details:", studentDetails);
  
  let studentNames = students.map(s => s.name);
  console.log("Student Names:", studentNames);
  
  let highMathScores = students.filter(s => s.grades.math > 80);
  console.log("High Math Scores:", highMathScores);
  
  let averageAge = students.reduce((acc, s) => acc + s.age, 0) / students.length;
  console.log("Average Age:", averageAge.toFixed(2));
  
  let ram = students.find(s => s.name === "ram");
  console.log("Found Student:", ram);
  
  // Corrected line with template literals using backticks
  students.forEach(s => console.log(`Name: ${s.name}, Course: ${s.course}`));
  
  let anyFailed = students.some(s => Object.values(s.grades).some(grade => grade < 50));
  console.log("Any Student Failed:", anyFailed);
  
  let allPassedScience = students.every(s => s.grades.science >= 40);
  console.log("All Students Passed Science:", allPassedScience);
  
  let studentReport = students.map(s => {
    let totalMarks = Object.values(s.grades).reduce((sum, mark) => sum + mark, 0);
    let averageMarks = totalMarks / Object.keys(s.grades).length;
    return { name: s.name, totalMarks, averageMarks: averageMarks.toFixed(1) };
  });
  
  console.log("Student Report:", studentReport);
  