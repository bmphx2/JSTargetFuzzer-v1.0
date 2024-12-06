function f1() {
    const o6 = {
        [-2]: undefined,
        15: undefined,
        [undefined]() {
            let v2 = this;
            try { v2.n(undefined, undefined); } catch (e) {}
            v2 += v2;
            super.f;
            return undefined;
        },
        ...undefined,
        "e": undefined,
        __proto__: undefined,
        "b": undefined,
        1024: undefined,
        ...undefined,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
const v9 = f1();
function f10(a11, a12) {
    const o17 = {
        6: a12,
        __proto__: v7,
        get e() {
            Object.defineProperty(this, 65537, { configurable: true, enumerable: true, set: f1 });
            return f1;
        },
        "f": a11,
        [v8]: a11,
        "h": a12,
        "e": v8,
        256: v8,
        [undefined]: v8,
    };
    return o17;
}
f10(v9, f10);
f10(v8, f10(v7, f10));
new Float32Array(10);
new Uint8ClampedArray(225);
new BigUint64Array(253, 10);
const v33 = [];
function f37(a38) {
    const o48 = {
        ...v33,
        set b(a40) {
            const o43 = {
                "maxByteLength": 2306,
            };
            const v45 = new ArrayBuffer(9, o43);
            new Int16Array(v45);
        },
        "f": -2147483649n,
        ...v33,
    };
    return o48;
}
const v49 = f37(5n);
f37(-2147483649n);
f37(8n);
const v54 = new Uint8Array(633);
const v57 = new Float64Array(128);
new Int16Array(3027);
const v61 = v54[12];
v49[v61];
v54.byteOffset >>= 128;
function f63(a64, a65, a66) {
    let [v67,v68,v69] = v57;
    try { v61(a65, a65, v54, v67, 5n); } catch (e) {}
    3027 ** a65;
    v68.__proto__;
    return a64;
}
f63(128, 3027, 5n);
