function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new Int16Array(0);
let v11 = 0;
while (v11 < 1) {
    v8.__proto__;
    v11++;
}
const v16 = new BigInt64Array(8);
function f17(a18, a19, a20, a21) {
    v16.__proto__ = a18;
    return a19;
}
f17(v5, v3, v4, f17);
const v25 = new Int32Array(727);
function f26() {
    return v5;
}
function f27() {
    return v3;
}
const t26 = v25[7];
t26[4294967295] = v16;
v11 > f27 ? v11 : f27;
("number").matchAll(("number").replace("number", "number").__proto__);
Number["isSafeInteger"]();
