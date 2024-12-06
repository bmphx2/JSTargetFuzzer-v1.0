const v1 = new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a4;
}
const v5 = new F2(WeakMap);
const v6 = new F2(v1);
const v7 = new F2(F2);
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = WeakMap;
    this.d = v6;
}
const v13 = new F8(v7, v6, v5);
new F8(v1, v7, v7);
const v15 = new F8(v6, v1, v7);
function f16(a17, a18) {
    const o30 = {
        ...a17,
        set d(a20) {
            WeakMap % this;
            const v22 = (a23, a24, a25) => {
                'use strict';
                new F8(a23, v5, a18);
                return a18;
            };
        },
        "a": a18,
        "d": v15,
        [a17]: F8,
        "b": a18,
    };
    return o30;
}
const v31 = f16(v13, v6);
try {
    new WeakSet(4087n);
} catch(e35) {
} finally {
}
f16(v13, v5);
f16(v13, v31);
const v42 = new BigInt64Array();
function f43() {
    return f43;
}
v42.lastIndexOf(f43);
