const multiplyValue = (value: number, multiplier?:number):number =>{
    if(!multiplier && multiplier !==0){
        return value * 2;
    }
    return value * multiplier;
}



const processInput = (value : string | number | boolean) =>{
    if(typeof(value) === "string"){
        return value.trim().toLowerCase();
    } else if(typeof(value) === "number"){
        return value * 10;
    } else if (typeof(value) === "boolean" && value === true){
        return "Active";
    } else
        return "Inactive";
}

console.log(processInput(false))