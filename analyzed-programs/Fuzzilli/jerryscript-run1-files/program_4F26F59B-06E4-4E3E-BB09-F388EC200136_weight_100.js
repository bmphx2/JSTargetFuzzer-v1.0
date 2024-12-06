function f3() {
    return "number";
}
const v4 = ["ZU","bigint","number","bigint",f3];
const v6 = ["ZU",v4,["number",f3],"ZU"];
function f13(a14, a15, a16) {
    const o26 = {
        "e": -4294967295,
        [a14]: a15,
        set a(a18) {
            const o21 = {
                "maxByteLength": 544,
            };
            const v23 = new SharedArrayBuffer(64, o21);
            new Uint8ClampedArray(v23);
        },
        "a": a14,
        [11]: a14,
    };
    return o26;
}
f13(v6, f13(v4, "number", v4), v4, "ZU", "bigint");
f13(-65537, f3, v6);
function F42(a44, a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a46;
    this.c = a45;
    this.d = a44;
}
new F42(10749n, -1499224921n, "toPrimitive");
const v48 = new F42(8n, 718485249n, "53417", 510486135);
const v49 = new F42(-1499224921n, 10749n, "toPrimitive");
const v50 = v48.__proto__;
let v51;
try { v51 = v49.p(-1499224921n, 718485249n, v50, 4096, 718485249n); } catch (e) {}
const o52 = {
    [-1499224921n]: "53417",
    367443060: v51,
    "d": 536870889,
};
new BigInt64Array(3975, BigInt64Array, -4294967295, -1n);
new Int32Array(1024);
new Uint8Array(2);
