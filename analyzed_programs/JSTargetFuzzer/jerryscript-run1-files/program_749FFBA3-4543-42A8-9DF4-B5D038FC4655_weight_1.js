function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a6;
}
new F3(268435456, 268435456);
const v8 = new F3(268435456, 268435456, F3, 8, 2);
let v9 = new F3(268435456, 2);
class C10 extends F3 {
    constructor(a12, a13) {
        super(a12, 8);
        v9--;
        try { a13["setMonth"]("setMonth"); } catch (e) {}
    }
    static set b(a18) {
        super.b = 2;
        const v19 = new F3(this, 268435456);
        try { this.delete(); } catch (e) {}
        v19.__proto__;
    }
    [F3];
    65535 = v8;
}
new C10(v9, 8);
new C10(v9, 8);
new C10(8, 268435456);
function f28() {
}
new Uint8Array(0);
let v42 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v44 = new Int32Array(127);
v42 /= v44;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
