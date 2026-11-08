const multiplyValue = (value, multiplier) => {
    if (!multiplier && multiplier !== 0) {
        return value * 2;
    }
    return value * multiplier;
};
const processInput = (value) => {
    if (typeof (value) === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof (value) === "number") {
        return value * 10;
    }
    else if (typeof (value) === "boolean" && value === true) {
        return "Active";
    }
    else
        return "Inactive";
};
console.log(processInput(false));
export {};
