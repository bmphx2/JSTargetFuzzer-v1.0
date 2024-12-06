const v2 = new Uint32Array(138);
const v5 = new Float32Array(3);
new Int32Array(3991);
try { Float32Array(3); } catch (e) {}
const o26 = {
    valueOf() {
        const v17 = super.e;
        super.b ^= v17;
        function F18(a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a21;
            this.f = a22;
            this.e = a20;
        }
        const v23 = new F18(0, 138, 12121n);
        const v24 = new F18(Uint32Array, v23, v17);
        new F18(v5, v24, v2);
        return 3991;
    },
};
