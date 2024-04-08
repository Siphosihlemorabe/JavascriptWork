let myWork = [];

for (let i = 1; i <= 10; i++) {
    let lessonName = 'Lesson ' + i;
    let status;

    if (i % 2 !== 0) {
        status = true; // If i is odd, set status to true
    } else {
        status = false; // If i is even, set status to false
    }

    myWork.push({ name: lessonName, status: status });
}

console.log(myWork);
