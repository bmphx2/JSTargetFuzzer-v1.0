function f0() {
    const o8 = {
        1: 2.220446049250313e-16,
        get e() {
            this[1073741824] = 6;
            for (let v5 = 0; v5 < 32; v5++) {
                this["p" + v5] = v5;
            }
            return 2.0;
        },
        ...2.0,
        5: 2.0,
    };
    return o8;
}
f0();
f0();
f0();
new Date();
new WeakSet();
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a23;
    this.d = a21;
}
new F19("l", "stack", f0, "l");
new F19("LdC", "LdC", F19, "stack");
new F19("l", "l", "LdC", "stack");
const v28 = [];
function f32(a33) {
    const o43 = {
        ...v28,
        set b(a35) {
            const o38 = {
                "maxByteLength": 2306,
            };
            const v40 = new ArrayBuffer(9, o38);
            new Int16Array(v40);
        },
        "f": -2147483649n,
        ...v28,
    };
    return o43;
}
const v44 = f32(5n);
f32(-2147483649n);
f32(8n);
const v49 = new Uint8Array(633);
const v52 = new Float64Array(128);
new Int16Array(3027);
function f58() {
    let {...v60} = arguments;
    return Map;
}
f58(Map, 4);
f58();
const v63 = v49[12];
v44[v63];
v49.byteOffset >>= 128;
function f65(a66, a67, a68) {
    let [v69,v70,v71] = v52;
    try { v63(a67, a67, v49, v69, 5n); } catch (e) {}
    3027 ** a67;
    v70.__proto__;
    return a66;
}
f65(128, 3027, 5n);
