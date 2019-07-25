let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];

// -------------- JS-Practice Question No : 01 -------------------// 

for (let i = 0; i < students.length; i++) {
    console.log("Name: " + students[i].name);
    if (students[i].gender === "f") {
        console.log("Gender: Female");
    }
    else {
        console.log("Gender: Male");
    }
    console.log("City: " + students[i].address.city);
    console.log("Score: " + students[i].admissionTestScore + " marks");
    console.log("");
};

// -------------- JS-Practice Question No : 02 -------------------// 

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "f") {
        console.log("Name: " + students[i].name);
    }
};
console.log("");

// -------------- JS-Practice Question No : 03 -------------------// 

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "m") {
        console.log("Name: " + students[i].name);
    }
};
console.log("");

// -------------- JS-Practice Question No : 04 -------------------// 

for (let i = 0; i < students.length; i++) {
    if (students[i].admissionTestScore >= 50) {
        console.log("Name: " + students[i].name);
    }
};
console.log("");

// -------------- JS-Practice Question No : 05 -------------------// 

for (let i = 0; i < students.length; i++) {
    if (students[i].address.city == "Karachi" && students[i].hasInternet === true) {
        console.log("Name: " + students[i].name);
    }
};
console.log("");

// -------------- JS-Practice Question No : 06 -------------------// 

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + "'s address: ");
    console.log(students[i].address.ilaqa + " in " + students[i].address.city + ", " + students[i].address.country);
    console.log("");
};

// -------------- JS-Practice Question No : 07 -------------------// 

for (let i = 0; i < students.length; i++) {
    if (students[i].phoneNo.includes("0331") || students[i].phoneNo.includes("0332") || students[i].phoneNo.includes("0333") || students[i].phoneNo.includes("0334") || students[i].phoneNo.includes("0335")) {
        console.log("Name: " + students[i].name);
    }
};
console.log("");

// -------------- JS-Practice Question No : 08 -------------------// 
let groupA = [];
let groupB = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].hasJob === false && students[i].hasSchoolBefore === false) {
        groupA.push(students[i].name)
    } else {
        groupB.push(students[i].name)

    }
};
console.log("Group A: " + groupA.join(", "));
console.log("Group B: " + groupB.join(", "));
console.log("");

// -------------- JS-Practice Question No : 09 -------------------// 

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " age is " + (new Date().getFullYear() - students[i].dob.getFullYear()) + " years");
};
console.log("");

// -------------- JS-Practice Question No : 10 -------------------// 

