function f3(a4) {
    const o5 = {
        __proto__: a4,
        [-1]: a4,
        "d": 2,
        "h": a4,
        [-4294967295]: 0,
        1116643272: a4,
        [a4]: 0,
        [0]: a4,
        5: a4,
        "a": 2,
    };
    return 2;
}
const v6 = f3(0);
f3(0);
const v8 = f3(0);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4294967295;
}
new F9(2, v6, v6);
const v15 = new F9(0, 2, v8);
new F9(2, 2, v15);
let v17 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v18 = [6,17590];
[-658853788,-256];
let v24 = BigUint64Array;
const v25 = new v24(12);
const v28 = new Uint32Array(v18);
new Uint8Array(16);
let v33;
try { v33 = v17(-4294967295); } catch (e) {}
({"buffer":v17,"d":v24,"g":v33,...v33} = v25);
const o34 = {
};
const v36 = new Proxy(v28, o34);
const v40 = v36.toPrimitive;
const o44 = {
    [v40]() {
        try {
            super.getUint16();
        } catch(e43) {
        }
        return this;
    },
};
function F51(a53, a54, a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
    a55.d = a56;
    this.f = a53;
}
const v57 = new F51(-4294967296, 5n, "-16", "-16");
new F51(-1, -7n, "-16", "global");
const v59 = new F51(-4294967296, 5n, "global", F51);
"-16" == v59;
if (-1) {
} else {
    function F64(a66, a67, a68) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a68;
    }
    const v69 = new F64(F64, v57, "function");
    const t64 = -1;
    new t64(v69, "global", "function");
    new F64(v69, "global", "function");
}
