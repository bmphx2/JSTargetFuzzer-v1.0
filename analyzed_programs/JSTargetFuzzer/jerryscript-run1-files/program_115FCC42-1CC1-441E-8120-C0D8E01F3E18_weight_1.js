const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
}
const v6 = new F2(F2, Set);
const v7 = new F2(Set, v6);
const v8 = new F2(v6, v7);
const v9 = [v8,v8,v8,v6,v7];
const v10 = [v6,v6];
const v11 = [v1];
function f12() {
    return Set;
}
class C16 extends F2 {
    constructor(a18, a19, a20, a21) {
        super(v9, v7);
        super.d = v11;
        let v24 = 1000000000.0;
        let v26 = -9223372036854775808 ^ --v24;
        v26++;
        v1 | v26;
    }
    static a;
    static [268435440n];
    static [v10] = 268435440n;
    a = v11;
}
new C16(v11, v11, v10, v8);
new C16(v11, v10, v10, v8);
new C16(v10, v9, v11, v7);
const v34 = new Uint32Array(181);
let v36 = BigUint64Array;
let v37 = new v36(1);
let v38 = 253;
[v38,,v36,v37] = v34;
try { v36["abs"](181, v38, v36); } catch (e) {}
new Uint16Array(v38);
v6[Uint16Array] = -4294967295;
new Uint16Array(3210);
new Int32Array(512);
new Uint32Array(9);
for (let i60 = 0; i60 < 2; i60++) {
    const v66 = new Function("x");
    v66.name;
}
Function();
