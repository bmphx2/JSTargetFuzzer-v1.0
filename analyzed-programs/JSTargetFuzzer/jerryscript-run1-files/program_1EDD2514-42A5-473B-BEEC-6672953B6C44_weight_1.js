function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -65526;
    this.g = -65526;
}
const v3 = new F0();
new F0();
const v5 = new F0();
v3[5] = F0;
Error();
v5.b &= 20698599;
v5[268435456] ^= 20698599;
function f15() {
    return f15;
}
function f16(a17) {
    const o18 = {
    };
    return o18;
}
const v19 = f16();
async function f20(a21, a22, a23) {
    const v25 = `
        Object.defineProperty(v19, "a", { writable: true, configurable: true, get: f15 });
        const v26 = f16 % 31874;
        +v26;
        new f15();
        new Int32Array(7);
        new BigUint64Array(662);
        new Uint32Array(8);
        -9223372036854775807 * v26;
    `;
    eval(v25);
    return eval;
}
f20();
