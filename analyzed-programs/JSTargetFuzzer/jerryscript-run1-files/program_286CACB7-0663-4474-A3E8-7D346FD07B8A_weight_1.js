new Int16Array(Int16Array);
new BigInt64Array(225);
new Uint8Array(4096);
[3,-65535];
[-9223372036854775808,257];
const v17 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v24 = new Int32Array(3004);
new Uint32Array(1);
new Float64Array(8);
function f32(a33, a34, a35) {
    const o52 = {
        "d": 11,
        "h": v17,
        ["getOwnPropertyDescriptors"](a37, a38) {
            const v39 = a35[a37];
            let v40;
            try { v40 = v24.every(v39, a34); } catch (e) {}
            try { v40.flat(3004); } catch (e) {}
            for (let v42 = 0; v42 < 5; v42++) {
                "p" + v42;
            }
            Math.trunc(Number && 1000000000.0);
            Math.abs(Number);
            Number + Number;
        },
    };
    return o52;
}
f32(1279509201, f32(f32(-2, v17, 11), 6, 1024), 1279509201);
[-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v57 = [6,17590];
new BigUint64Array(12);
const v61 = new Uint32Array(v57);
const o62 = {
};
new Proxy(v61, o62);
const v67 = Symbol.toPrimitive;
const o70 = {
    [v67]() {
        try {
        } catch(e69) {
        }
    },
};
function F76(a78, a79, a80, a81) {
    if (!new.target) { throw 'must be called with new'; }
    a80.d = a81;
    this.f = a78;
}
const v82 = new F76(-4294967296, 5n, "-16");
const v83 = new F76(-4294967296, 5n, "global", "global");
"-16" == v83;
if (!-1) {
    function F85(a87, a88, a89) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F85(F85, v82, "function");
}
