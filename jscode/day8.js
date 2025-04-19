class Person{
  constructor( name,id){

        this.name=name;
        this.id=id;
    }


    displaydetails(){
        console.log(`Name: ${this.name} , ID :${this.id}`);

    }
}
class Student extends Person{

  #marks = 0 ;

  constructor(name,id,course){
    super(name,id);
    this.course=course;
  }

  setMarks(score){

    if(score>=0 && score <=100){
        this.#marks=this.#marks;
    }
    else{
        console.log("invail marks")
    }}
    getMarks(){
        return this.#marks;
    }
  

}


class Teacher extends Person{

constructor( name,id,subject){
    super(name,id);
    this.subject=subject;
}
asignMarks(student,marks){
    student.setMarks(marks);

}


}



const student1 = new Student("rohith",12,"ECE");
const teacher1 = new Teacher("Monisha",13,"maths");

teacher1.asignMarks(student1,-10);
student1.displaydetails();



# protocol://domainName/path?query-parameters
#"http://www.flipkart.com/watches?type=digital&rating=4"