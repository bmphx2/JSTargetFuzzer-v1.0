function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 268435456;
    this.g = 268435456;
    this.__proto__ = 268435456;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new Date();
let v11 = 0;
while (v11 < 5) {
    let v14 = 0;
    while (v14 < 1) {
        const v17 = v3.g;
        try { v17.findIndex(v14, v14, v7, v14); } catch (e) {}
        v14++;
    }
    v5[6];
    v11++;
}
const v25 = [v5,4.0];
[v25,1.2057068733773982e+308,Date,F0];
[v7];
try { v4["o"](v3, v25, "o"); } catch (e) {}
new Uint32Array(257);
new Int8Array(2730);
new Int16Array(16);
function F42() {
    if (!new.target) { throw 'must be called with new'; }
}
class C44 extends F42 {
    constructor(a46, a47, a48) {
        super();
        this.__proto__ = F42;
    }
}
const v50 = new ArrayBuffer();
new DataView(v50);
new C44(F42, F42, C44);
