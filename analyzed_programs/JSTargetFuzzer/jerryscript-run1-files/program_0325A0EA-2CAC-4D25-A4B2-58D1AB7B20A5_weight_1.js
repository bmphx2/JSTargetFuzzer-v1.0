class C3 {
    constructor(a5) {
        const v6 = a5.__proto__;
        let v7 = 0;
        while (v7 < 3) {
            super.b = this;
            try { v6(v6, 0.7596616057692492, this, 2); } catch (e) {}
            v7++;
        }
    }
    static [2] = 0.7596616057692492;
}
const v12 = new C3(C3);
const v13 = new C3(v12);
const v14 = new C3(2);
class C15 extends C3 {
    [2] = v13;
    constructor(a17, a18, a19, a20) {
        super(a17);
        v13 / v13;
        try {
            super.o(a18, SyntaxError, SyntaxError, this, v12);
        } catch(e24) {
        }
    }
    [-4294967296] = v14;
    [v14];
    static c;
}
const v25 = new C15(0.7596616057692492, C3, v12, v14);
const v26 = new C15(C15, v13, C3, v14);
new C15(v12, v12, v13, v25);
function f28() {
    v26[8] = v12;
    new Uint32Array(128);
    new Int32Array(256);
    new Uint16Array(7);
    return v26;
}
function f38() {
    return C15;
}
const v44 = new Array(9);
const v47 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v57 = `
    Uint32Array >= Uint32Array;
    let v59;
    try { v59 = v47.join(v57); } catch (e) {}
    v44[v59];
`;
eval(v57);
