function f3() {
    return "number";
}
const v4 = ["ZU","bigint","number","bigint",f3];
const v6 = ["ZU",v4,["number",f3],"ZU"];
function f13(a14, a15, a16) {
    const o26 = {
        "e": -4294967295,
        [a14]: f13,
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
const v27 = f13(v4, -4294967295, v4);
typeof v4 === "function";
new f3();
f13(v6, v27, v4, "ZU", "bigint");
f13(5, f3, v6);
function F47(a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a51;
    this.c = a50;
    this.d = a49;
}
new F47(10749n, -1499224921n, "toPrimitive");
const v53 = new F47(8n, 718485249n, "53417", 510486135);
const v54 = new F47(-1499224921n, 10749n, "toPrimitive");
const v55 = v53.__proto__;
let v56;
try { v56 = v54.p(-1499224921n, F47, v55, 4096, 718485249n); } catch (e) {}
const o57 = {
    [-1499224921n]: "53417",
    367443060: v56,
    "d": 536870889,
};
new BigInt64Array(3975, BigInt64Array, -4294967295, -1n);
function f63() {
    return Int32Array;
}
try { ("53417").trimRight(); } catch (e) {}
new Int16Array(2317);
new Uint16Array(256);
new Int16Array(1000);
new Int32Array(1024);
new Uint8Array(Uint8Array);
