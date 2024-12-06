function f3(a4, a5) {
    const o14 = {
        ...a4,
        m(a7, a8) {
            const o9 = {
                ...this,
            };
            super.b;
            o9.toString = a4;
            return -9223372036854775808n;
        },
    };
    return o14;
}
const v15 = f3(65537, 65537);
const v16 = f3(v15, 268435441);
const v17 = f3(-680080865, 65537);
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -680080865;
    this.f = a22;
    this.b = a22;
}
new F18(-680080865, v16, v15);
const v24 = new F18(65537, v17, v16);
new F18(65537, v15, v24);
new Float32Array(15);
new Uint8ClampedArray(4);
new Int32Array(9);
const v37 = new BigUint64Array();
const v38 = new BigInt64Array();
Reflect.getOwnPropertyDescriptor(Reflect.apply(v37.copyWithin, v38));
