function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
new F3(F3);
new F3(512);
new F3(-2147483648);
const v20 = new Int8Array(1);
new Int16Array(2441);
const v26 = new Uint8Array(3892);
function f27() {
    return -26626;
}
const v28 = [5.718487474613278e+307,524.2950042187163,0.37357325652764495];
[0.2362170527912898,0.39782676765013036,-3.0,-774628.9736404992];
[-2.0,964560.0181082794,220.54163283272646];
const v34 = v28[2147483648];
let v35;
try { v35 = v20.forEach(v34, v20); } catch (e) {}
v34 ** v35;
const o37 = {
    "defineProperty": f27,
    "get": f27,
};
new Proxy(v26, o37);
