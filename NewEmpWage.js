/* -----------------  UC1 ------------------------- */

{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;

    if (empCheck == IS_ABSENT) {
        console.log("UC1 - Employee is Absent .")
        return;

    } else {
        console.log("UC1 - Employee is Present. ");

    }
}



/* ---------------------------------------UC2 ----------------------------- */
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    let empHrs = 0;

    let empCheck = Math.floor(Math.random() * 10) % 3;

    switch (empCheck) {
        case IS_PART_TIME:
            console.log("Employee is Present for Part Time");
            empHrs = PART_TIME_HOURS;
            break;

        case IS_FULL_TIME:
            console.log("Employee is present for Full Time");
            empHrs = FULL_TIME_HOURS;
            break;

        default:
            console.log("Employee is Absent");

            empHrs = 0;
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log(" UC2-Emp Wage : " + empWage);

}