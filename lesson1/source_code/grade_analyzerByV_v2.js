const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];


class student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

     getAverage() {
         let sum = 0;
         for (let i = 0; i < this.score.length; i++) {
            sum += this.score[i];
    }
    return sum / this.score.length;
  }

     getLetterGrade() {
            const average = this.getAverage();
                if (average >= 90) {
                     return "A";
                } else if (average >= 80) {
                    return "B";
                } else if (average >= 70) {
                    return "C";
                } else if (average >= 60) {
                    return "D";
                } else {
                    return "F";
                }
        }
}

    function analyzeClass(students) {
    let totalClassScore = 0;
    let topStudent = null;
    let highestAverage = -1;

    console.log("------- STUDENT REPORT -------");
        for (let i = 0; i < students.length; i++) {
        const studname = students[i];

        const avg = studname.getAverage();
        const grade = studname.getLetterGrade();

        console.log(`${studname.name} - Average: ${avg.toFixed(1)} | Grade: ${grade}`);

        totalClassScore += avg;

    if (avg > highestAverage) {
      highestAverage = avg;
      topStudent = studname;
    }
  }

    const classAverage = totalClassScore / students.length;
        console.log("-----------------------------------");
        console.log(`Class Average: ${classAverage.toFixed(1)}`);
    if (topStudent) {
        console.log(`Top Student: ${topStudent.name} with ${highestAverage.toFixed(1)}`);
    }
}


const studentInstances = studentData.map(
  data => new student(data.name, data.scores)
);


analyzeClass(studentInstances);