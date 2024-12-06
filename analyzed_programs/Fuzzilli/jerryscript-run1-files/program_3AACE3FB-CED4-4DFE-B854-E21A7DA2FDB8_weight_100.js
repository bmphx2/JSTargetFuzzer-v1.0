class C3 {
    o(a5) {
        let v6;
        try { v6 = new a5(-65536, this, this, this, this); } catch (e) {}
        function F7(a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a9;
        }
        const v12 = new F7(-1000000000000.0, v6, -1.2730665931440232e+308);
        const v13 = new F7(v12, this, F7);
        new F7(v13, -1.2730665931440232e+308, v13);
        return this;
    }
    [-65536];
}
const v15 = new C3();
const v16 = new C3();
const v17 = new C3();
new BigUint64Array(3);
new Uint8Array(2);
let v24 = 12;
new BigUint64Array(v24);
v24 = -65536;
if (-1000000000000.0 != C3) {
    let {"b":v28,} = v17;
} else {
    try { BigUint64Array(v15, v24, v24); } catch (e) {}
}
function F30(a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2;
}
const v35 = new F30(C3, 3, v16);
new F30(v35, v24, C3);
new F30(v35, 3, v16);
