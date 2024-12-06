function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870888;
    this.a = 536870888;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C9 extends F0 {
    10 = F0;
}
new C9();
const v11 = new C9();
new C9();
class C14 {
    f = v4;
    [F0];
}
const v15 = new C14();
v3 <<= v5;
let v16;
try {
const t0 = -256;
v16 = t0();
} catch (e) {}
v3 = v16;
const v17 = delete v5[12];
v15[v17] = v17;
new C14();
new C14();
new Int8Array(12);
new Int32Array(8);
class C26 extends C14 {
    f = v11;
}
new C26();
new C26();
new C26();
new Uint8Array(151);
const t39 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new t39();
const v38 = new Int16Array();
const o39 = {
};
async function f40(a41, a42, a43) {
    Object.defineProperty(o39, "a", { writable: true, configurable: true, get: v38 });
    return a41;
}
f40(Int16Array, Int16Array, f40);
