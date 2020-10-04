const isLeapYear = (year: number): boolean => {
    const check = (num: number): boolean => year % num === 0;

    if (check(4) && check(100)) {
        return check(400);
    }

    return check(4);
}

export default isLeapYear;
