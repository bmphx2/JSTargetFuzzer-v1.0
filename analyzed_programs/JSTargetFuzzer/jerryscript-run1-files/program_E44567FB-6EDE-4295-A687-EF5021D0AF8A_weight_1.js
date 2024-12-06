function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 16;
    this.e = 16;
    this.c = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v10 = new WeakMap();
function f11(a12, a13, a14) {
    const o20 = {
        "c": -11,
        "g": a13,
        [F0]: v4,
        ...v4,
        "a": -7,
        m(a16, a17, a18) {
            a17 ^= a14;
            return a18 || v4;
        },
        "e": v5,
        __proto__: a12,
    };
    return o20;
}
f11(v10, -11, 6);
f11(v3, 6, -11);
f11(v10, -7, -7);
const v24 = [];
function f28(a29) {
    const o39 = {
        ...v24,
        set b(a31) {
            const o34 = {
                "maxByteLength": 2306,
            };
            const v36 = new ArrayBuffer(9, o34);
            new Int16Array(v36);
        },
        "f": -2147483649n,
        ...v24,
    };
    return o39;
}
const v40 = f28(5n);
f28(-2147483649n);
const v42 = f28(8n);
const v45 = new Uint8Array(633);
const v48 = new Float64Array(128);
new Int16Array(3027);
const v52 = v45[12];
"p" + v40[v52];
class C57 {
    static get a() {
        const o61 = {
            "maxByteLength": 268435439,
        };
        const v63 = new SharedArrayBuffer(1278, o61);
        v63.byteLength;
        o61[-622135.0466104625];
        const o67 = {
        };
        new Proxy(v63, o67);
        new Uint32Array(v63);
        return o61;
    }
}
const v71 = new C57();
class C72 extends C57 {
    static set c(a74) {
        let v75;
        try { v75 = a74(v42, v42, a74); } catch (e) {}
        Object.defineProperty(v71, this, { writable: true, configurable: true, value: v75 });
        new Float32Array(4096);
        new Float32Array(1);
        new BigUint64Array(8);
    }
}
new C72();
v45.byteOffset >>= 128;
function f86(a87, a88, a89) {
    let [v90,v91,v92] = v48;
    try { v52(a88, a88, v45, v90, 5n); } catch (e) {}
    3027 ** a88;
    v91.__proto__;
    const v96 = [5];
    try { v96.flatMap(v96); } catch (e) {}
    new Uint32Array(11);
    return a87;
}
f86(128, 3027, 5n);
