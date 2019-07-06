 let createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployees = function(arrays) {
    return arrays.map(function(array) {
        return createEmployeeRecord(array)
    })    
}

let createTimeInEvent = function(dateStamp) {
    let split = dateStamp.split(" ")
    let hour = split[1]
    let date = split[0]

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

let createTimeOutEvent = function(dateStamp) {
    let split = dateStamp.split(" ")
    let hour = split[1]
    let date = split[0]

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

let hoursWorkedOnDate = function(date) {
    let timeInEvent = this.timeInEvents.find(function(e) {
        return e.date === date
    })

    let timeOutEvent = this.timeOutEvents.find(function(e) {
        return e.date === date
    })

    return (timeOutEvent.hour - timeInEvent.hour) / 100
}

let wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let calculatePayroll = function(employeeRecordsArray) {
    return employeeRecordsArray.reduce(function(memo, record) {
        return allWagesFor.call(record) + memo
    }, 0)
}

let createEmployeeRecords = function(data) {
    return data.map(function(employeeData) {
        return createEmployeeRecord.call(this, employeeData)
    })
}

let findEmployeebyFirstName = function(srcArray, firstName) {
    return srcArray.find(function(employee) {
        return employee.firstName === firstName
    })
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


