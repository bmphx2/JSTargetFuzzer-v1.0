function f0() {
    const o8 = {
        get f() {
            super.a = -2147483648;
            return 398679298;
        },
        1570404833: -2147483648,
        "g": -2147483648,
        "e": "1329",
        "a": -2147483648,
        ..."unscopables",
        "b": -2147483648,
    };
    return o8;
}
const v9 = f0();
let v10 = f0();
const v11 = f0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v9;
}
const v16 = new F12(v10, v9);
const v17 = new F12(v9, v10);
const v18 = new F12(v11, v9);
const v19 = [128,-1142507725,10];
const v20 = [4294967297,512,-13983,-2147483648,8];
const v21 = [65536,-12,-16,255,-58347];
function f22(a23, a24, a25, a26) {
    const o38 = {
        "g": a26,
        __proto__: a26,
        ...a23,
        ...a24,
        [a24]: a24,
        "b": v20,
        ...a26,
        [v21](a28, a29, a30) {
            v10 = a30;
            const o33 = {
                "maxByteLength": 12,
            };
            const v35 = new SharedArrayBuffer(12, o33);
            new Int32Array(v35);
            return 12;
        },
    };
    return o38;
}
f22(v17, v19, f22(v18, v20, v18, v19), v20);
f22(v16, v21, v17, v19);
function f45() {
    return 2n;
}
const t54 = 16;
t54.toString = f45;
const t56 = f45(5n, v9);
const v53 = delete t56[f45];
function f54() {
    return f45;
}
const v60 = new Uint8Array(2);
let v62 = Float32Array;
const v63 = new v62(127);
new Int32Array(243, 243, v53);
new Map();
new Number(127);
new BigInt64Array(3886, 536870912, BigInt64Array);
new Uint32Array(0);
v62 += v62;
let v78;
try { v78 = Map(v60); } catch (e) {}
const v80 = [v78];
Reflect.apply(v63.sort, v63, v80);
try { v80.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-65536];
