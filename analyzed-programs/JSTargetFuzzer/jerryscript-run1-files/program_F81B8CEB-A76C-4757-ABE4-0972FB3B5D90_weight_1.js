function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = false;
    this.cause = false;
    this.cause = false;
}
const v3 = new F1();
new F1(v3, F1);
new F1();
new Uint8ClampedArray(8);
new Int16Array(1024);
new Uint8ClampedArray(4051);
let v31 = ("multiline")["x"];
const v33 = Symbol.species;
const t14 = "x";
t14[v33] = 536870888n;
const t16 = 9n;
t16[112] = 255;
try { v33.m(255, "x", -9007199254740990n); } catch (e) {}
v31 = v33;
