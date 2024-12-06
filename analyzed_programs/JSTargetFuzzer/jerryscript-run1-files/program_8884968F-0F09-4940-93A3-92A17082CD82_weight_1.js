function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -3;
    this.a = -3;
    this.d = -3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
    this.c = v4;
}
const v9 = new F6(v4);
const v10 = new F6(v3);
const v11 = new F6(v4);
function f12(a13, a14, a15, a16) {
    const o38 = {
        m(a18, a19, a20) {
            new BigUint64Array(5);
            new Uint8Array(253);
            const v34 = [[null,null],null,Float64Array,a20];
            const o36 = {
                [v34]: -1n,
            };
            new Float64Array(2);
            return F0;
        },
    };
    return o38;
}
f12(v10, v11, v5, v9);
f12(v10, v10, v4, F6);
f12(v11, v10, v4, v9);
const v44 = new WeakSet();
v44.add(v44).has(BigInt64Array);
