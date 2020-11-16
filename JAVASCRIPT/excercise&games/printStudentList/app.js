var students = [
    {
        "name" : "Student1",
        "score" : 10
    },
    {
        "name" : "Student2",
        "score" : 8
    },
    {
        "name" : "Student3",
        "score" : 5
    },
    {
        "name" : "Student4",
        "score" : 3
    }
]

function CheckScore(student){
    return student.score >= 5
}

function getStudentName(student){return student.name
}



function printerService(data) {return data.filter(CheckScore).sort((a, b) => {return a.score - b.score}).map(getStudentName)
}
let result = printerService(students);
console.log(result)