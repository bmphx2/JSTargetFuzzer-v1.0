let v2 = -2147483648;
class C3 {
    [-268435456] = "symbol";
    static ["symbol"];
    static p(a5) {
        v2 = a5;
        for (let v6 = 0; v6 < 32; v6++) {
            this["p" + v6] = v6;
        }
        return "symbol";
    }
}
new C3();
const v10 = new C3();
new C3();
const v13 = new RangeError();
class C14 {
    set f(a16) {
        let v17;
        try { v17 = v2.resolve(); } catch (e) {}
        delete this[6];
        function F19(a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = C3;
        }
        new F19(v17, v10);
        new F19(v13, RangeError);
        new F19(this, v13);
    }
}
new C14();
new C14();
new C14();
const v31 = new BigInt64Array(512);
const v34 = new Float64Array(16);
new Int8Array(15);
v34.buffer /= 16;
for (const v44 of v31) {
    new Float64Array(5);
    new Float64Array(2);
    new Float32Array(2983);
}
