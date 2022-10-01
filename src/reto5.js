export default function daysToXmas(date) {
    if (!(date instanceof Date)) throw new Error('Invalid date format');
    const december = new Date('Dec 25, 2021');
    const difference = december.getTime() - date.getTime();
    const sol = Math.ceil( difference / (1000*3600*24));
    return sol
}