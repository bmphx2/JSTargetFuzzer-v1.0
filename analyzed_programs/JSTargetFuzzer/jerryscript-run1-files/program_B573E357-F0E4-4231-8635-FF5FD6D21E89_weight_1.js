class C3 {
    constructor(a5) {
        const v6 = a5.__proto__;
        let v7 = 0;
        while (v7 < 3) {
            super.b = this;
            C3[C3] = v6;
            const v10 = a5.__proto__;
            let v11;
            try { v11 = new v10(2, v10, v10, v6); } catch (e) {}
            this >= v11 ? this : v11;
            try { v6(v6, 0.7596616057692492, this, 2); } catch (e) {}
            v7++;
        }
    }
    static [2] = 0.7596616057692492;
}
const v17 = Symbol.toPrimitive;
const o28 = {
    [v17]() {
        super.e = this;
        new Float32Array(1872);
        new BigUint64Array(86);
        new Uint8ClampedArray(3959);
        return 0.7596616057692492;
    },
};
const v29 = new C3(C3);
const v30 = new C3(v29);
const v31 = new C3(2);
class C32 extends C3 {
    [2] = v30;
    constructor(a34, a35, a36, a37) {
        super(a34);
        v30 / v30;
        try {
            super.o(a35, SyntaxError, SyntaxError, this, v29);
        } catch(e41) {
        }
    }
    [-4294967296] = v31;
    [v31];
    static c;
}
const v42 = new C32(0.7596616057692492, C3, v29, v31);
const v43 = new C32(C32, v30, C3, v31);
const v44 = new C32(v29, v29, v30, v42);
function f45() {
    v43[8] = v29;
    new Uint32Array(128);
    new Int32Array(256);
    new Uint16Array(7);
    return v43;
}
function f55() {
    return C32;
}
v44.toString = f55;
v29.__proto__ = v31;
const v64 = new Array(9);
const v67 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v77 = `
    Uint32Array >= Uint32Array;
    let v79;
    try { v79 = v67.join(v77); } catch (e) {}
    v64[v79];
`;
eval(v77);
