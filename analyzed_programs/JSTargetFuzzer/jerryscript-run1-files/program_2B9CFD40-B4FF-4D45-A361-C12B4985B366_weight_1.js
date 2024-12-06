[3,-6326,-65536,1133124169,65535,-65537,129];
[-268435456,55882,28706];
const v5 = [-7,-8,1073741823,-65537,-2,-9007199254740990];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
    this.g = v5;
    this.c = a9;
}
new F6("f", "arguments");
const v11 = new F6("arguments", "f");
new F6("f", F6);
const v16 = [];
function f20(a21) {
    const o31 = {
        ...v16,
        [8n]: 5n,
        ...a21,
        ...v11,
        "e": F6,
        6: a21,
        set b(a23) {
            const o26 = {
                "maxByteLength": 2306,
            };
            const v28 = new ArrayBuffer(9, o26);
            new Int16Array(v28);
        },
        "f": -2147483649n,
        "b": a21,
        "g": a21,
        "a": 10n,
        ...v16,
        ...a21,
        ...v16,
    };
    return o31;
}
const v32 = f20(5n);
f20(-2147483649n);
f20(8n);
function f37(a38, a39) {
    typeof a39 === "object";
}
new Promise(f37);
const v45 = new Uint8Array(633);
const v48 = new Float64Array(128);
new Int16Array(3027);
const v52 = v45[12];
v32[v52];
v45.byteOffset >>= 128;
function f54(a55, a56, a57) {
    let [v58,v59,v60] = v48;
    try { v52(a56, a56, v45, v58, 5n); } catch (e) {}
    3027 ** a55;
    v59.__proto__;
    return a55;
}
f54(128, 3027, 5n);
