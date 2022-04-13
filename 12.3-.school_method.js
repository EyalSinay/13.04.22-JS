const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};


// 1:
school.findPerson = (type, id) => {
    // !check if exists
    const objAsk = school[type].find(objOfType => {
        return objOfType.id === id;
    });
    return objAsk;
}
// console.log(school.findPerson("teachers", 2));


// 2:
school.assignStudent = (studentId, subject) => {
    const teacherObj = school.teachers.find(teachersObj => {
        const arrSubjects = teachersObj.subjects;
        const capacityLeft = teachersObj.capacityLeft;
        if (arrSubjects.includes(subject) && capacityLeft > 0) {
            return true;
        }
    });
    if (teacherObj) {
        const studentObj = school.findPerson("students", studentId);
        const studentName = studentObj.name;
        teacherObj.students.push(studentName);
        teacherObj.capacityLeft--;
    } else {
        console.log("Sorry, no available teachers left");
        return
    }
}
// school.assignStudent(11, "history");
// school.assignStudent(12, "history");
// school.assignStudent(13, "history");
// console.log(school.findPerson("teachers", 2));


// 3:
school.assignTeachersSubject = (id, newSubject) => {
    const teacherObj = school.findPerson("teachers", id);
    const arrSubjects = teacherObj.subjects;
    if (!arrSubjects.includes(newSubject)) {
        arrSubjects.push(newSubject);
    }
}
// school.assignTeachersSubject(1, "physics");
// console.log(school.findPerson("teachers", 1));


// 4:
school.addOneYearToStudent = studentId => {
    const studentObj = school.findPerson("students", studentId);
    studentObj.age++;
}
// school.addOneYearToStudent(12);
// console.log(school.findPerson("students", 12));