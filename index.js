/* Your Code Here */

let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployees = function(array) {
    return array.map(function(el){
        return createEmployeeRecord(el)
    })
}

let createTimeInEvent = function(datestamp){
  let [date, hour] = datestamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(datestamp){
    let [date, hour] = datestamp.split(' ')
    // let hour = date.split(' ')[1]
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(function(e){
        return e.date === date
    })

    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === date
    })

    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(date){
    let dates = hoursWorkedOnDate.call(this, date)
    let wages = dates * this.payPerHour
    return parseFloat(wages.toString())
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payment = eligibleDates.reduce(function (total, date) {
        return total + wagesEarnedOnDate.call(this, date)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payment
}

let createEmployeeRecords = function(array) {
  return array.map(function(array){
    return createEmployeeRecord(array)
  })
}

let findEmployeebyFirstName = function(array, firstName) {
  return array.find(function(el){
    return el.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(total, el){
        return total + allWagesFor.call(el)
    }, 0)
}
