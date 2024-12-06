function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 65536;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a8;
    this.h = a8;
}
new F6(v5);
new F6(v4);
new F6(v5);
for (let v16 = 0; v16 < 54; v16++) {
    new WeakMap();
}
v5[Symbol.isConcatSpreadable];
new Uint32Array(11);
new Uint32Array(7);
new Uint8Array(256);
const v43 = ("451")[1439];
function f44() {
    return v43;
}
function f45(a46, a47, a48) {
    new Int8Array(1182);
    new Uint8Array(4);
    new Uint8Array(2);
    return F0;
}
f45("function", 256, "function");
