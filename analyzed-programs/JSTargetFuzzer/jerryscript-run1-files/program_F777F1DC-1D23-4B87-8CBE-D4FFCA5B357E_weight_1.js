function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 3;
    this.a = 3;
}
new F0();
const v4 = new F0();
new F0();
new BigUint64Array(3975);
const v11 = new Uint32Array(84);
for (let i14 = 0, i15 = 10; i14 === i15; i14++, i15--) {
    i14 >>= i14;
}
new Float32Array(0);
const o31 = {
    get toPrimitive() {
        super.e = Float32Array;
        this.b <<= 0;
        let v28;
        try { v28 = Uint32Array.values(); } catch (e) {}
        let v29;
        try { v29 = v4.m(84, 84, v28, v11, v28, this, Uint32Array, v28); } catch (e) {}
        try { this.shift(v29, v28); } catch (e) {}
        this.valueOf = v29;
        return this;
    },
};
