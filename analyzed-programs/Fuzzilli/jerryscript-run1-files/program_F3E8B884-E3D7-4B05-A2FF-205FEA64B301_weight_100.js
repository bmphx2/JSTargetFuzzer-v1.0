function f0() {
}
function f1() {
    return f0;
}
class C2 extends f0 {
    static p(a4) {
        const v9 = typeof a4.__proto__;
        v9 === "function";
        return v9;
    }
    d = f0;
}
new C2();
new C2();
new C2();
new Uint32Array(2479);
new Int8Array(5);
new Int8Array(10);
const o26 = {
    "maxByteLength": 268435440,
};
const v28 = new ArrayBuffer(7, o26);
new Int16Array(v28);
-Infinity;
