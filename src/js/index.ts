/*
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);
*/

let weightInput: HTMLInputElement = <HTMLInputElement>document.getElementById("weightInput");
let convertToGramsButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("convertToGramsButton");
let convertToOuncesButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("convertToOuncesButton");
let output : HTMLDivElement = <HTMLDivElement>document.getElementById("outputDiv");


convertToGramsButton.addEventListener("click", convertToGrams);
convertToOuncesButton.addEventListener("click", convertToOunces);

function convertToGrams(): void{
    let value1: string = weightInput.value;
    let result: number = parseInt(value1) *  28.34952;
    output.innerHTML = result.toString();
}

function convertToOunces(): void{
    let value1: string = weightInput.value;
    let result: number = parseInt(value1) / 28.34952;
    output.innerHTML = result.toString();
}
