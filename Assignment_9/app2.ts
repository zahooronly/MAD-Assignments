interface ipp {
    name: string;
    sclass: string;
    rollno: number;
}
var student: ipp = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(`Student Name: ${student.name}\nStudent Class: ${student.sclass}\nStudent Roll No: ${student.rollno}`);
console.log("After Deleting Rollno Property");
delete student.rollno;
console.log(`Student Name: ${student.name}\nStudent Class: ${student.sclass}\nStudent Roll No: ${student.rollno}`);
