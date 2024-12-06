function f1(a2, a3, a4) {
    arguments.callee;
    return f1;
}
const v7 = f1(f1, f1, f1);
let v8 = [v7,v7,v7];
class C9 {
    valueOf(a11, a12) {
        let v13;
        try { v13 = this(); } catch (e) {}
        ({"b":v8,"e":a11,} = v13);
    }
}
const v14 = new C9();
async function f15(a16, a17) {
    a16 /= C9;
    return v8;
}
f15(v14);
new Int32Array(140);
new BigUint64Array(583);
new Int16Array(8);
("number").search(/(\xed\xb0\x80ia\D[^123]a{?)/gyism["compile"]());
