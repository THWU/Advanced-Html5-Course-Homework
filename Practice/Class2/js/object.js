
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

// Class 2
function A(a) {
    this.varA = a;
}

A.prototype = {
    varA: null,
    doSomething: function() {
        
    }
}

/*
function B(a, b) {
    this.varA = a;
    this.varB = b;
}

B.prototype = {
    varA: null,
    varB: null,
    doSomething: function() {
        
    }
}
*/

//  建構式
function B(a, b) {
    A.call(this, a);
    this.varB = b;
}

B.prototype = {
    varB: null,
    doSomething: function() {
        A.prototype.doSomething.apply(this, args);
    }
}

// Example
var a = 1, b = 3, c = 5;
function add(a, b, c) {
    return a + b + c;    
}

add.call(this, a, b, c);

add.apply(this, [a, b, c]);

add(1, 3, 5);

add.call(this, 1, 3, 5);

add.apply(this, [1, 3, 5]);

//  Practice
function Employee(name, baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
}

Employee.prototype.getSalary = function () {
    return this.baseSalary;
};

var resnick = new Employee("Yuan-Hung", 22000);
console.log(resnick.getSalary());

function Sales(name, baseSalary, performance) {
    Employee.call(this, name, baseSalary);
    this.performance = performance;
}

Sales.prototype.getSalary = function () {
    return Employee.prototype.getSalary.apply(this) + (this.performance * 0.03);    
};

function Manager(name, baseSalary, performance) {
    Employee.call(this, name, baseSalary);
    this.performance = performance;
}

Manager.prototype.getSalary = function () {
    return Employee.prototype.getSalary.apply(this) + (this.performance)
};

var rick = new Sales("Rick", 22000, 45000);
console.log(rick.getSalary());

var jacky = new Manager("Jacky", 22000, 10000);
console.log(jacky.getSalary());