// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }


}

const fred = new Person({
    age: 35,
    name: 'Fred',
    location: 'Bedrock',
    gender: 'M'
  });

  const cam = new Person({
    age: 35,
    name: 'Cam',
    location: 'Utah',
    gender: 'M'
  });
  
  console.log(cam.speak())
  console.log(fred.speak())

  class Instructor extends Person {
      constructor(attributes) {
          super(attributes);
          this.specialty = attributes.specialty;
          this.favLanguage = attributes.favLanguage;
          this.catchPhrase = attributes.catchPhrase;
      }

      demo(subject) {
          return `'Today we are learning about ${subject} `
      }o

      grade(student, subject) { 
          return `${student.name} receives a perfect score on ${subject}`

      }
  }