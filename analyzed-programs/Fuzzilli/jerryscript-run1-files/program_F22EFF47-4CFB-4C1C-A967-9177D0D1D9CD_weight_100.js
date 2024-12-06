const v1 = new WeakSet();
const v2 = [59696,54555,-14,-1728391944,1330074570,-65536];
const v3 = [512,1473521898,1000,-9223372036854775807,-1,-217,0,-10];
const v4 = [10];
function f5() {
    return v4;
}
function f9(a10, a11, a12, a13) {
    const o21 = {
        m(a15, a16) {
            try { a10(a10, a13, a15, this); } catch (e) {}
            const v18 = +(a11 += -9007199254740990);
            v4.a = v18;
            try {
                super.fromCharCode(a10, v18);
            } catch(e20) {
            }
            return a10;
        },
        [f5]: v3,
        "c": v1,
        337: a12,
        __proto__: v3,
    };
    return o21;
}
v1 > WeakSet ? v1 : WeakSet;
const v26 = Symbol.iterator;
const o35 = {
    [v26]() {
        let v28 = 10;
        const o34 = {
            next() {
                v28--;
                const v32 = v28 == 0;
                const o33 = {
                    "done": v32,
                    "value": v28,
                };
                return o33;
            },
        };
        return o34;
    },
};
f9(f9, -9007199254740990, -35702, v2);
const v37 = f9(WeakSet, -35702, 203926122, v4);
[v1,f9(-35702, -9007199254740990, -35702, v2)];
[v37,-35702,f9,-35702];
[-35702,-9007199254740990];
let v42 = undefined;
v42 |= v42;
4.0 & v42;
