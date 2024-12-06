function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
    this.c = -2147483647;
    this.e = -2147483647;
}
const v3 = new F0();
new F0();
const v5 = new F0();
class C6 {
    [v5] = v3;
    static 6;
    [v3] = F0;
    o(a8) {
        const v10 = Symbol.unscopables;
        this[v10] = v10;
        return a8;
    }
    static a = F0;
}
new C6();
new C6();
new C6();
new BigInt64Array(256);
const v25 = new Uint32Array(227);
new Uint16Array(129);
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a32;
}
new F29(256, 129);
new F29(v25, 227);
new F29(v25, 129);
function f36() {
}
class C42 {
}
const v43 = (a44, a45, a46, a47) => {
    function F48(a50, a51, a52) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a46;
    }
    return v43;
};
new Uint8Array(227);
let v61 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v61);
v61 /= v61;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
