function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -2;
    this.b = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3];
const v7 = [v3,v4,F0,v6,v4];
const v8 = [F0,v7,v5];
function f9() {
    return v6;
}
delete v4[1024];
Object.defineProperty(v3, 4, { configurable: true, enumerable: true, value: v6 });
const t16 = v5 > v5 ? v5 : v5;
t16[-27108] = v6;
Object.defineProperty(v5, 8, { enumerable: true, set: f9 });
v5.b = v7;
v7 > -1800197726;
v5 > v8;
const v26 = new Date();
v26.setUTCMilliseconds();
let v28;
try {
const t0 = 1;
v28 = t0(1, 1);
} catch (e) {}
(1000n).toString(v28);
