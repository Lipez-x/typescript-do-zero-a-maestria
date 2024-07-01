function myDecorator() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
    console.log("Passando do primeiro decorator...");
  };
}

function myDecorator2() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Passando do segundo decorator...");
  };
}

function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class exClass {
  @myDecorator2()
  @myDecorator()
  @enumerable(false)
  myMethod() {
    console.log(this);
    console.log("Executando função :)");
  }
}

const x = new exClass();
x.myMethod();

console.log("------------------------------------------------");

//Class Decorator

function classDecorator(constructor: Function) {
  if (constructor.name === "User") {
    console.log("Validando usuário");
    console.log("Usuário criado");
  }
}

@classDecorator
class User {
  private login;
  private password;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
}

const u1 = new User("user", "123");

//Property Decorator

function formatId() {
  return function (target: Object, propertKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      value = newValue.toLocaleUpperCase();
    };

    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatId()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const item = new ID("aj7761hbbna");
console.log(item.id);
