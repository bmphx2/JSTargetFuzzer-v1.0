function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4;
    this.d = 4;
    this.f = 4;
}
new F0();
new F0();
new F0();
class C10 {
    6 = -1073741824n;
}
const o11 = {
    ...C10,
};
new BigInt64Array(2);
new Float32Array(2);
new Float64Array(255);
const v29 = new Float32Array(538);
try {
    new Uint32Array(-49924);
} catch(e34) {
}
new Float64Array(14);
new Float32Array(257);
Float64Array instanceof Float32Array;
const o44 = {
    valueOf() {
        let v43 = super.d;
        v43 |= Boolean;
        return 257;
    },
};
try { v29.entries(); } catch (e) {}
