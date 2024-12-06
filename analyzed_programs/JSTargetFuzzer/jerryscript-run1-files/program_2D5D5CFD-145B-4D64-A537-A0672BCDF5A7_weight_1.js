function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.h = f0;
}
new F1();
new F1();
new F1();
new Uint8Array(2);
new Float64Array(2492);
new BigInt64Array(5);
const v17 = new BigUint64Array(BigUint64Array, BigUint64Array);
v17.copyWithin();
const v19 = new Uint16Array(Uint16Array, Uint16Array);
const o24 = {
    m(a21, a22, a23) {
        return this;
    },
};
Reflect.set(o24.m, v19);
