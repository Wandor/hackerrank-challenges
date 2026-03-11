function dayOfProgrammer(year) {

    // Special transition year
    if (year === 1918) {
        return `26.09.${year}`;
    }

    let leap = false;

    // Julian Calendar
    if (year < 1918) {
        leap = year % 4 === 0;
    }

    // Gregorian Calendar
    else {
        leap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
    }

    let day = leap ? 12 : 13;

    return `${String(day).padStart(2,'0')}.09.${year}`;
}
