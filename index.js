/* Your Code Here */
function createEmployeeRecord([string1, string2, string3, number1]) {
    const records = {
        firstName: string1,
        familyName: string2,
        title: string3,
        payPerHour: number1,
        timeInEvents: [],
        timeOutEvents: []
    };
    return records;
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(time, 10),
        date: date
    };
    this.timeInEvents.push(timeInEvent); // Use `this` to refer to the employee record
    return this; // Return the updated object
}
    createTimeInEvent("2003-03-12 1200");

function createTimeOutEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(time, 10),
        date: date
    };
    this.timeOutEvents.push(timeOutEvent); // Use `this` to refer to the employee record
    return this; // Return the updated object
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(function(event) {
        return event.date === date;
    }).hour;
    const timeOut = this.timeOutEvents.find(function(event) {
        return event.date === date;
    }).hour;
    return (timeOut -timeIn) / 100;
};

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

function allWagesFor() {
  const datesWorked = this.timeInEvents.map(function (event) {
        return event.date;
    });
    const allWages = datesWorked.reduce((total, date) => {
        return total + wagesEarnedOnDate.call(this, date);
    }, 0);
    return allWages;
}

function findEmployeeByFirstName(srcArray, firstname) {
    return srcArray.find(function (employee) {
        return employee.firstName === firstname;
    });
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => {
        return total + allWagesFor.call(employee);
    }, 0);   
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

