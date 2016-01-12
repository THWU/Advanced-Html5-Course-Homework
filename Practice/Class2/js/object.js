
// 物件的表示法
var student = {
    name: "ABCD",
    phone: "09123456789",
    age: 20
}

student = {
    name: "Resnick",
    contact: {
        email: "resnick1223@gmail.com",
        phone: "0910654720"
    }
}

var student1 = {
    name: "ABC",
    phone: "0912345678",
    city: "taipei",
    sayHello: function() {
        document.write("My name is ", this.name);
    }
}

var student2 = {
    name: "DEF",
    phone: "0987654321",
    city: "taipei",
    sayHello: function() {
        document.write("My name is ", this.name);
    }
}

function Student(name, phone, isHappy) {
    
    this.name = name;
    this.phone = phone;
    this.isHappy = isHappy;
    this.toString = function() {
        return "學生姓名:" + this.name + " 學生電話:" + this.phone;
    }
}

var student3 = new Student("Resnick", "0910654720", true);
var student4 = new Student("Eric", "0911111111", false);
var status = student3.isHappy? student3.name + " 開心" : student3.name + " 不開心";

Student.prototype.sayHello = function() {
    document.write("Hello, My name is " + this.name + "<br>");
}

function Persion(name, phone, isHappy) {
    
    this.name = name;
    this.phone = phone;
    this.isHappy = isHappy;
    this.toString = function() {
        return "人姓名:" + this.name + " 人電話:" + this.phone;
    }
}