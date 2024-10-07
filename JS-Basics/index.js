// EX - 9 Grade
// Average and grade as below
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);

        if(average >= 0 && average <= 59) {
            return 'F';
        }
        if(average >= 60 && average <= 69) {
            return 'D';
        }
        if(average >= 70 && average <= 79) {
            return 'C';
        }
        if(average >= 80 && average <= 89) {
            return 'B';
        }
        if(average >= 90 && average <= 100) {
            return 'A';
        }
    }

    function calculateAverage(array) {
        let sum = 0;
        for (let value of array) {
            sum += value;
    
            return sum / array.length;
    }
}
