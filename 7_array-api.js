// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);    //  apple|banana|orange
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎| 🥝| 🍌| 🍒';
    const result = fruits.split('|');
    console.log(result);    //  (4) ['🍎', ' 🥝', ' 🍌', ' 🍒']
    const result2 = fruits.split(',', 2);
    console.log(result2);   //  (2) ['🍎', ' 🥝']
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);    //  (5) [5, 4, 3, 2, 1]
    console.log(array);     //  (5) [5, 4, 3, 2, 1] 배열 자체의 값도 바꿔
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    //const result = array.splice(0,2);
    //console.log(result);    //  (2) [1, 2]  배열 자체를 수정
    //console.log(array);     //  (3) [3, 4, 5]

    const result2 = array.slice(2, 5);
    console.log(result2);   //  (3) [3, 4, 5]   원하는 부분만 리턴해서 받아와 사용
    console.log(array); //  (5) [1, 2, 3, 4, 5]
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find(function(item, index) {
       //console.log(item, index);
       return item.score === 90;
      });
      // const result = student.find((student) => student.score === 90);
      console.log(result);  //  Student {name: 'C', age: 30, enrolled: true, score: 90}
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
      console.log(result);  //  (3) [Student, Student, Student]
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      console.log(result);  //  (5) [45, 80, 90, 66, 88]
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.clear();
      const result = students.some((student) => student.score < 50);
      console.log(result);  //  true

      const result2 = !students.every((student) => student.score >= 50);
      console.log(result2); //  true
  }
  
  console.clear();
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => {    //  reduceRight 배열의 가장 뒤어서 부터 시작
        console.log('------------');  
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    // const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);    //  369   //  73.8
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
      .map(student => student.score)
      .filter((score) => score >= 50)
      .join();
    console.log(result);    //  80,90,66,88
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students.map(student => student.score)
      .sort((a, b) => a - b)    //  b - a 큰 순으로 나와
      .join();  //  string으로 변환
      console.group(result);    //  45,66,80,88,90
  }
  