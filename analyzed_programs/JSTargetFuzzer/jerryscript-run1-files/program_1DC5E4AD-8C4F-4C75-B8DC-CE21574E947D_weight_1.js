function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9007199254740992;
    this.a = -9007199254740992;
    this.e = F0;
}
const v3 = new F0();
new F0();
new F0();
class C6 extends F0 {
    set d(a8) {
        const v10 = new WeakSet();
        function f14(a15, a16) {
            const o20 = {
                "e": WeakSet,
                "h": a15,
                get c() {
                    let v18 = "delete";
                    ({"e":v18,} = v10[v18](a15, a16, v18));
                    return -4294967295;
                },
                [a15]: -13,
                [WeakSet]: -4294967295,
            };
            return o20;
        }
        f14(8, 8);
        f14(-4294967295, -13);
        const v23 = f14(-13, 8);
        new BigInt64Array(5);
        new Uint8Array(256);
        new Int32Array(1355);
        async function f33(a34, a35, a36, a37) {
            'use strict';
            const t34 = 5;
            t34[2] = a35;
            return a37;
        }
        f33(WeakSet, v23, 1355, -13);
        Math.log(966908764);
        !-1000.0;
        +-1717947581;
    }
    d;
    static c;
    [v3];
}
new C6();
new C6();
const v48 = new C6();
new Int16Array(v48);
new BigInt64Array(1357);
new Float64Array(4);
Uint8ClampedArray.__proto__;
try {
const t0 = 1357;
t0();
} catch (e) {}
