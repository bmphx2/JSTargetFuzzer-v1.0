function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4294967297;
    this.e = -4294967297;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new Uint32Array(230);
new Int16Array(93);
let v12 = 0;
const v15 = new Int32Array(166);
function f16(a17, a18, a19) {
    const o20 = {
        ...v15,
    };
    return o20;
}
for (const v22 in f16()) {
    delete v15[v22];
}
new Uint8Array(v12);
class C26 extends Int16Array {
    constructor(a28, a29) {
        super(a28, v12, 230);
        let v30 = 0;
        do {
            let v31;
            try { v31 = a28.all(v3); } catch (e) {}
            v12 = v31;
            const v33 = Symbol.unscopables;
            a28[v33] = v33;
            v30++;
        } while (v30 < 8)
    }
}
new C26(v3, v3);
new C26(v4, v5);
new C26(v4, v5);
function f40() {
    return f40;
}
Symbol.iterator != f40;
