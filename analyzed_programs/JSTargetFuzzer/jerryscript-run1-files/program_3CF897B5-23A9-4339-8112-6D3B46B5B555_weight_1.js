function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.f = f0;
}
const v3 = new F1();
let v4 = new F1();
new F1();
Object.defineProperty(v3, "g", { enumerable: true, get: f0, set: f0 });
typeof f0 === "symbol";
const v13 = Math.ceil(v4);
const v15 = [-4294967296];
try { v15.slice(-4294967297n); } catch (e) {}
const v18 = new WeakMap();
v18.get(Int8Array);
--v4;
let v22 = v4 / -33506;
--v22;
const v26 = [65537,129,-15,8,1073741824,1,256,-1024,536870889];
[1,-58179,1073741823,-65536,2,11,4294967296,48407];
F1 === v13;
v26[Symbol.isConcatSpreadable] = v22;
new f0();
[-65537,-2147483649];
(-2n) ** 36564n;
