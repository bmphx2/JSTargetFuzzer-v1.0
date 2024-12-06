function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this[14] = f0;
    new Uint8ClampedArray(141);
    new Uint16Array(127);
    new Uint32Array(40);
}
new F1();
new F1();
const v14 = new F1();
const v15 = [v14];
const v17 = [f0,v15,[v15,v15,v14,v14]];
let v19 = 65535;
const v21 = F1 >> F1;
v19 = 4;
v15[v17] = v21;
let v25 = -Infinity;
Math.ceil(!F1);
v25 ^ v25;
Math.acos(v14);
v25++;
[3.0,749060.7240443013,-2.220446049250313e-16,1.7976931348623157e+308,3.0,753.4601652350336,0.6243564191789909,0.0,1000000.0];
[-2.633562873203767e+307,2.220446049250313e-16];
[-1.0];
const v35 = new Date();
v35.getMilliseconds();
