// CODE here for your Lambda Classes

//Person
class Person {
    constructor(name, age, location, gender) {
        this.name = name;
        this.location = location;
        this.age = age;
        this.gender = gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }


}

const fred = new Person('fred', 33, 'bedrock', 'M')
    
const cam = new Person('Cam', 35, 'Utah', 'M')
    

// instructor
  class Instructor extends Person {
      constructor(name, age, location, gender, specialty, favLanguage, catchPhrase) {
          super(name, age, location, gender);
          this.specialty = specialty;
          this.favLanguage = favLanguage;
          this.catchPhrase = catchPhrase;
      }

      demo(subject) {
          console.log(`'Today we are learning about ${subject} `)
        }

      grade(student, subject) { 
          console.log(`${student.name} receives a perfect score on ${subject}`)

      }
  }

  const ron = new Instructor('Ron', 44, 'Miami', 'M', "javascript", 'Python', 'Dont forget the homies')

  const pam = new Instructor('Pam', 44, 'Miami', 'F', "javascript", 'Python', 'Dont forget the homies')

  ron.demo('python')
 


// student
class Student extends Person {
    constructor(name, age, location, gender, previousBackground, className, favSubjects)  {
        super(name, age, location, gender);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listsSubjects() {
      this.favSubjects.forEach(function (subjects){
          console.log(subjects)

      })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}
        `)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on  ${subject}
        `)
    }


}




const paul = new Student ('paul',25,'Detroit', 'M', 'compliance', 'WEBPT5', ['Html', 'CSS', 'JavaScript'])



const chase = new Student ('chase',24,'Detroit', 'M', 'marketing', 'WEBPT5', ['Html', 'CSS', 'python'])

paul.PRAssignment('html')
paul.sprintChallenge('html')
paul.listsSubjects()
chase.listsSubjects()


// project manager

class ProjectManger extends Instructor {
    constructor(name, age, location, gender, gradClassName, favInstructor) {
        super(name, age, location, gender)
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor
    }

    standup(channel) {
        console.log( `${name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}s code on ${subject}`)

    }
}

const jim = new ProjectManger('Jim', 28, 'Detroit', 'M', 'CS1', 'Sean')
 
const adam = new ProjectManger('Adam', 25, 'Utah', 'M', 'CS1', 'Sean')

jim.standup("webpt5")
adam.debugsCode(paul, 'html')
pam.grade(paul, 'python')