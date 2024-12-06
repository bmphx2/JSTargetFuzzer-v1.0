let v2 = -233489200n;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 10n;
}
const v6 = new F3(10n);
const v7 = new F3(9n);
const v8 = new F3(v2);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    this.d = a13;
}
try { v8(v6); } catch (e) {}
const v16 = v2++;
const v17 = v8.a;
v7[v16];
v6.a /= v17;
new F9(10n, 10n, v2, 10n);
new F9(9n, v2, 9n, 9n);
const v21 = new F9(10n, 9n, v2, 9n);
function f22() {
    return v21;
}
const v25 = new Uint32Array(181);
let v27 = BigUint64Array;
let v28 = new v27(1);
let v29 = 253;
[v29,,v27,v28] = v25;
try { v27["abs"](181, v29, v27); } catch (e) {}
new Uint16Array(v29);
for (let i42 = 0; i42 < 2; i42++) {
    const v48 = new Function("x");
    v48.name;
}
Function();
