# Public, Private, Protected and Readonly access modifiers working process in TypeScript. 
Public, Private, Protected and Readonly are used to create access control for Class properties in TypeScript.

## Public:
Public is the default access modifier of TypeScript. After using public access modifier we can use class property or method from everywhere. It can be used inside class, outside of class and in the child class. 

## Private:
Private access modifier allows using property or method inside the class only. Outside of class and child class can't access property or method that declared with Private access mdoifier. It is normally used for data hiding and ensuring encapsulation.

## Protected:
Protected access modifier only allows using property or method to their child class. Outside of class and their child class property and method access is not allowed.

## Readonly:
Readonly allows to declare or assing value one time inside the Constructor. Value can't be changed second time. Readonly ensure data protection by giving read only access and prevent write access. 

## Example Of Public, Private, Protected and Readonly:
```ts
// Public
class Employee {
  public name: string = "Riead";
}

//Private
class Employee {
  private salary: number = 30000;
}

//Protected
class Employee {
  protected name: string = "Riead";
}
class Manager extends Employee {
  getName() {
    return this.name;
  }
}

//Readonly
class Employee {
  readonly id: number = 101;
}

```

## Conclusion:
Access modifiers help us control who can use a class property or method. Public allows access from everywhere, private keeps it inside the class only, and protected allows access inside the class and its child classes. Readonly makes sure a value can't be changed after it is set. Using them properly makes our code safer, cleaner and easier to maintain.