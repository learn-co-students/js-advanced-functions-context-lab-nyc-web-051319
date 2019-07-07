/* Your Code Here */

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

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array){
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployees(arrOfArr){
  return arrOfArr.map(employee => {
    return createEmployeeRecord(employee)
  })
}

function createTimeInEvent(date){
  let empHour = parseInt(date.split(" ")[1])
  let empDate = date.split(" ")[0]
  this.timeInEvents.push({
    type: "TimeIn",
    hour: empHour,
    date: empDate
  })
  return this
}

function createTimeOutEvent(date){
  let empHour = parseInt(date.split(" ")[1])
  let empDate = date.split(" ")[0]
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: empHour,
    date: empDate
  })
  return this
}

function hoursWorkedOnDate(date){
  debugger
  let timeInTime = this.timeInEvents.find(event => {
    return event.date === date
  })
  let timeOutTime = this.timeOutEvents.find(event => {
    return event.date === date
  })
  return timeOutTime.hour/100 - timeInTime.hour/100
}

function wagesEarnedOnDate(date){
  let wage = hoursWorkedOnDate.call(this, date)
  return this.payPerHour * wage
}


function findEmployeebyFirstName(srcArray, firstName){
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let createEmployeeRecords = function(src) {
  return src.map(function(row){
    return createEmployeeRecord(row)
  })
}


let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
