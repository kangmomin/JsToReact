const student = {
    "name": "강모민",
    "age": 18,
    "mbti": "ESTP",
    country: "korea",
    height: 176.6,
    say: (comment) => {
        console.log(`${student.name}: ${comment}`)
    }
}

// student에 있는 값을 토대로 출력
console.log(`
이름: ${student.name}
나이: ${student.age}
mbti: ${student.mbti}
국적: ${student["country"]}
키: ${student["height"]}
`)

// student 객체 안의 say 함수 실행
student.say("hello")

for (key in student) {
    console.log(student[key])
}