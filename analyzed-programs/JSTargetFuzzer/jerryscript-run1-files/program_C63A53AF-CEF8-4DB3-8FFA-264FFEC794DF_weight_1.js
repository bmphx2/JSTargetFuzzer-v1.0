function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870888;
    this.a = 536870888;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C10 {
    f = v4;
    [F0];
}
const v11 = new C10();
v3 <<= v5;
let v12;
try {
const t0 = -256;
v12 = t0();
} catch (e) {}
v3 = v12;
const v13 = delete v5[12];
v11[v13] = v13;
new C10();
new C10();
new Int8Array(12);
new Int32Array(8);
new Uint8Array(151);
const t27 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new t27();
