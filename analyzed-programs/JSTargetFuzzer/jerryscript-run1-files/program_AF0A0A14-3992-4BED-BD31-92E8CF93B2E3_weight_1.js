function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1000;
    this.f = 1000;
    this.c = 1000;
}
const v3 = new F0();
new F0();
function f6(a7, a8) {
    const o9 = {
    };
    return o9;
}
const v10 = f6();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v10, 32753n, { enumerable: true, get: f6 });
}
const v11 = new F0();
new Map();
Number["isFinite"](-10);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a23;
}
new F21(F21, v3, v11, "number");
const v28 = new F21("toString", Map, v3, "bigint");
new F21(v28, v28, v3, "number");
const v32 = new BigUint64Array(2095);
try { v32.map(Array); } catch (e) {}
