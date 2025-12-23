let students = []; 

const studentForm = document.getElementById('studentForm')
const tableBody = document.getElementById('studentTableBody')
const averageDisplay = document.getElementById('averageDisplay')

studentForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const studentName = document.getElementById('studentName').value
    const score = parseFloat(document.getElementById('studentScore').value)

    students.push({studentName,score})

    studentForm.reset()
    render()

    console.log(students)
})

function deleteStudent(index){
    students.splice(index, 1)
    render()
}

function render() {
    tableBody.innerHTML = ' '
    let totalScore = 0

    students.forEach((student, index) =>{
        totalScore += student.score

        const row = `
        <tr>
            <td>${student.studentName}</td>
            <td>${student.score}</td>
            <td><button onclick = "deleteStudent(${index})">Delete</button></td>
        </tr>
        `
        tableBody.innerHTML += row
    })

    const avg = students.length === 0 ? 0 : (totalScore / students.length).toFixed(2);
    averageDisplay.innerText = `Average Score: ${avg}`;
}