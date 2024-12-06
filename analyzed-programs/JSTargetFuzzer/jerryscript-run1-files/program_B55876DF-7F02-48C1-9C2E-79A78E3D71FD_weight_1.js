let v0 = "512";
class C3 {
    static valueOf(a5, a6) {
        v0 = a6;
        const t3 = "toString";
        t3.__proto__ = a5;
        function F7(a9, a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a12;
            this.e = "slice";
            this.d = a6;
        }
        new F7(this, a5, v0, v0);
        new F7(v0, a6, a6, "slice");
        new F7("slice", a5, a5, "toString");
        return this;
    }
    static b = "slice";
}
new C3();
new C3();
new C3();
new Array(5);
new BigUint64Array(10);
new Uint32Array(3587);
new Uint32Array(121);
const v33 = new Float64Array(3077, 3077, 3077);
const v34 = [3077,v33];
const v35 = v33[1510131433];
v34.concat(v35 << v33, v35);
