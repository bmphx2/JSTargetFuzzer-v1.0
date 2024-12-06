function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 128;
    this.h = 128;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[[F0,v5,v5,v5,v3],v4,v3];
[v4];
for (let i11 = 0; i11 < 3; i11++) {
    function f17() {
        return i11;
    }
}
new BigUint64Array(4);
new Float32Array(2103);
new BigInt64Array(403);
const v26 = [-38216];
const v27 = [v26,v26,v26];
const v29 = new Int16Array(v26);
function f30(a31, a32) {
    const v33 = v29[-1];
    Object.defineProperty(v33, v27, { writable: true, value: v33 });
    return v27;
}
try { v26.forEach(f30, Float32Array); } catch (e) {}
