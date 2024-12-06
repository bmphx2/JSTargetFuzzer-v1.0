function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
}
let v3 = new F1();
const v4 = new F1();
const v5 = new F1();
let v7 = new F1(v3, v4, f0, this, F1);
v3 = v7;
v7 = v5;
[v3,F1];
[v3];
const v10 = [v7,v7];
let v21;
try {
const t0 = 37556;
v21 = t0(37556, 37556);
} catch (e) {}
typeof 65536 === "undefined";
try { v10.forEach(f0, v4); } catch (e) {}
("undefined").length;
(1000n).toString(v21);
