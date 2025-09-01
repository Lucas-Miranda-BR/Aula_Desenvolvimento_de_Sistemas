// const a = new Animal();

// a._name = "Cheetah";
// a._paws = 4;
// a._locale = "Savana";
// console.log(a.display());
// console.log(a.echoSound("Mrow"))

// const p = new Passaro();
// p._name = "Ave de Rapina";
// p._locale = "Savana";
// p._paws = 2
// p._FeatherColor = "Marrom / Branco"
// p._HasFlight = true;

// console.log(p.display());
// console.log(p.echoSound("Caw"));
// console.log(p.canFly(p._HasFlight));


const m = new Mamifero();

m._name = "Elefante";
m._paws = 4;
m._locale = "Savana";
m._type = "terrestre";
m._weightClass = "Pessado";

console.log(m.display());
console.log(m.echoSound("Phrew"));
console.log(m.displayType(m._type));
