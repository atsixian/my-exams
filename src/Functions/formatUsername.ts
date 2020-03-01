//input first.last or first.last@mail.mcgill.ca
//output first.last@mail.mcgill.ca
export default (name:string) : string =>{
    const postfix = "@mail.mcgill.ca";
    return name.includes(postfix)?name:(name+postfix);
}