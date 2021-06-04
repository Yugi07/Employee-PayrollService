//uc1
const IS_ABSENT = 0
let empcheck = Math.floor(Math.random() * 10) % 2;
if (empcheck == IS_ABSENT) {
    console.log("employee is absent");
    return;
} else {
    console.log("employe is present")
    
}
//uc2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let emphrs = 0;
empcheck = Math.floor(Math.random() * 10) % 3;
switch(empcheck) {
    case IS_PART_TIME;
    emphrs = PART_TIME;
    break;
    case IS_FULL_TIME ;
    emphrs = FULL_TIME ;
    break;
    default;
     emphrs = 0;
}
let empwage = emphrs + WAGE_PER_HOUR;
console.log("Emp Wage");

//uc3
function getworkhours(empcheck) {
    switch(empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
    default:
        return 0;
    }
}
let emphrs= 0;
let empcheck = Math.floor(Math.random()* 10) % 3;
emphrs = getworkhours(empcheck);
let empwage = emphrs * WAGE_PER_HOUR;
console.log("empwage:" + empwage);


//uc4 cal wage for month
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;
for(let day = 0; day<NUM_OF_WORKING_DAYS; day++) {
    let empcheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empcheck); 
}
let empWage = empHrs * WAGE_PER_HOURS;
console.log("Total Hrs:" +empHrs+ "Emp Wage;" + empWage);

//uc5 num of workingdays or twh per month 
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let TotalEmpHrs = 0;
let totalWorkingDays = 0;
while(TotalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empcheck = Math.floor(math.random() * 10) % 3;
    TotalEmpHrs += getWorkingHours(empcheck);
let empWage = TotalEmpHrs * WAGE_PER_HOURS ;
console.log("UC5- Total Days:" = totalWorkingDays +
"Total Hrs:" + TotalEmpHrs + "Emp Wage:" + empWage);
}
//uc6 array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOURS;
}
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let TotalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(TotalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empcheck = Math.floor(math.random() * 10) % 3;
    let EmpHrs = getWorkingHours(empcheck);
    TotalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(TotalEmpHrs);
console.log("UC6- Total Days:" = totalWorkingDays +
"Total Hrs:" + TotalEmpHrs + "Emp Wage:" + empWage);
