export default (day:string) : Date =>{
    const currentYear = new Date().getFullYear();
    const yearToAppend = '-' + currentYear;
    return new Date((day.length < 10)?(day + yearToAppend):day);
    //if date format is "20-Apr", concat "2020"
}