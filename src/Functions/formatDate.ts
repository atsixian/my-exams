export default (day:string) : string =>{
    return (day.length < 10)?(day += '-2020'):day;
    //if date format is "20-Apr" instead of "04/20/2019"
}