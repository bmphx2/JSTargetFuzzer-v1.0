function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v6 = [v5,v3,v5];
const v7 = [v3,v6,v5,v6];
[v4,f0,v7,f0,v7];
const v10 = new Map();
function f11() {
    return v10;
}
class C14 {
    1073741824;
}
for (const v15 in C14) {
}
const v18 = new Float32Array(Float32Array);
function f19(a20, a21, a22, a23) {
    return a21;
}
v18.reduce(f19);
