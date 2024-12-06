function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4;
    this.d = 4;
    this.f = 4;
}
new F0();
new F0();
new F0();
new BigInt64Array(2);
new Float32Array(2);
new Float64Array(255);
const v26 = new Float32Array(538);
try {
    new Uint32Array(-49924);
} catch(e31) {
}
new Float64Array(14);
new Float32Array(257);
Float64Array instanceof Float32Array;
const o41 = {
    valueOf() {
        let v40 = super.d;
        v40 |= Boolean;
        return 257;
    },
};
try { v26.entries(); } catch (e) {}
