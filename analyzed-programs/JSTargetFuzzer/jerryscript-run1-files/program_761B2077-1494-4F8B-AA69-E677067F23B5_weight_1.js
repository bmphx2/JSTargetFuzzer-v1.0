function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.h = f0;
    const v4 = [6,6,6,6];
    v4[5] = 6;
    v4[4];
}
new F1();
new F1();
new F1();
class C20 extends F1 {
    static b;
}
new C20();
new C20();
new C20();
Object.defineProperty(C20, "d", { configurable: true, value: "function" });
var g = 5n;
const t21 = "global";
t21.length = 1;
new Uint8ClampedArray(193);
new Int8Array(64);
new BigInt64Array(127);
function F43(a45, a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a48;
    this.f = -4294967296;
}
new F43(-4294967296, 5n, "global", "-16");
new F43(-4294967296, -7n, "-16", "global");
const v51 = new F43(-4294967296, 5n, "global", "global");
if ("function" == v51) {
} else {
    function F56(a58, a59, a60) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a60;
    }
    const v61 = new F56(F56, "global", "function");
    new F56(v61, "global", "function");
    new F56(v61, "global", "function");
}
