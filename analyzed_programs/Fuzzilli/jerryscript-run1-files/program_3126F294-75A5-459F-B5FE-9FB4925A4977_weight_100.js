function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4096;
    this.g = 4096;
    this.d = 4096;
}
new F0();
const v4 = new F0();
new F0();
for (const v6 in v4) {
    new Float32Array(155);
    typeof Float32Array === "boolean";
    new Int32Array(594);
    new Float32Array(192);
    new Uint8Array(255);
    new Uint8ClampedArray(1000);
    const v27 = new Uint32Array(8);
    new Uint8ClampedArray(v27, 1000, 255);
    v27.valueOf = v4;
}
let v33;
try { v33 = this(); } catch (e) {}
typeof v33;
class C36 extends F0 {
    static 4;
}
new C36();
new C36();
new C36();
new Int16Array(0);
new Uint32Array(4096);
new BigInt64Array(107);
try {
const t0 = 65535;
new t0(65535, 65535);
} catch (e) {}
