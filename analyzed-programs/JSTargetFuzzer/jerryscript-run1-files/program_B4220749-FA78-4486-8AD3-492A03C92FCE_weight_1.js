function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 512;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v16 = [];
function f20(a21) {
    const o31 = {
        ..."-6",
        set b(a23) {
            const o26 = {
                [a21]: 1184793088,
                __proto__: v16,
                "g": 4096,
                [-9007199254740992n]: ArrayBuffer,
                "a": 4096,
                "maxByteLength": 2306,
            };
            const v28 = new ArrayBuffer(9, o26);
            new Int16Array(v28);
        },
        "f": -2147483649n,
        ...a21,
    };
    return a21;
}
const v32 = f20(5n);
const v33 = f20(-2147483649n);
f20(8n);
const v36 = new WeakMap();
function F37(a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v5;
    this.g = a41;
}
const v42 = new F37(v5, 1610942902n, "e");
new F37(v4, v42, v42, v16, v3, v33);
new F37(v3, 5n, v36);
const v47 = new Uint8Array(v3);
const v50 = new Float64Array(128);
new Int16Array(3027);
const v54 = ("c")[12];
v32[v54];
v47.byteOffset >>= 128;
function f56(a57, a58, a59) {
    let [v60,v61,v62] = v50;
    try { v54(a58, a58, v47, v60, 5n); } catch (e) {}
    3027 >>> a58;
    v61.__proto__;
    return a57;
}
f56(128, 3027, 5n);
