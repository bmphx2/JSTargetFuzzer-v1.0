function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741823;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f8(a9, a10) {
    const o11 = {
        "c": Int8Array,
        "h": a10,
    };
    return o11;
}
const v12 = f8(v5, v4);
f8(v12, v12);
f8(v3, v3);
new Int8Array(3733);
new Uint32Array(655);
new BigUint64Array(2);
new BigInt64Array(256);
const v30 = new Uint32Array(227);
new Uint16Array(129);
function F34(a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a37;
}
new F34(256, 129);
const v39 = new F34(v30, 227);
new F34(v30, 129);
function f41() {
}
new Uint8Array(227);
let v55 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v55);
v55 /= v55;
new WeakSet();
new BigInt64Array(2);
const v72 = [5];
async function f73(a74, a75, a76) {
    await 2;
    return 1073741824;
}
f73(-2147483649n, 6n, v39);
v72.reverse();
