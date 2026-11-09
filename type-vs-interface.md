# Core differences between Type Alias and Interface in TypeScript.

Type alias and Interface both are important feature in TypeScript to define specific custom data type. 

## Type Alias:
We can create a custom name for a specific Type by using Type Alias. It is declare by using "type" keyword. The main reason of using Type Alias is make clean and reusable code. We can create String, Number, Boolean, Object, Array, Union, Intersection and Touple using Type Alias. Mainly, Type alias is suitable for Complex type and union type. Normally type alias is not preferable for Object structure if there need to marge multiple declaration. Type alias not support multiple declaration and it can't be marge. 

## Interface:
It is a typescript feature for define object structure. Interface is declare by using "interface" keyword. The main pourpose of using interface is define type of Object property and method. Interface help to make the code Organized, Reusable and Maintanable. Primarily in Object Oriented Progamming and Class Structure select, Interface is very effective. We can inherit properties from another interface by using interface extends. Also, interface can declare multiple time and it will marge all of them. There are limitations in interface for using it on Primitive types, Union types, Touple or Complex type combination. 

## Example Of Type Alias:
```ts
type User = {
    name: string;
    age: string;
    email: string;
}
const newUser: User = {
    name: "Riead",
    age: "25",
    email: "mdriead.bd@gmail.com"
}
```

## Example Of Interface:
```ts
interface Student {
    id: number;
    name: string;
    department: string;
}

const newStudent: Student ={
    id: 2241091255,
    name: "MD RIEAD MIA",
    department: "CSE",
}
```