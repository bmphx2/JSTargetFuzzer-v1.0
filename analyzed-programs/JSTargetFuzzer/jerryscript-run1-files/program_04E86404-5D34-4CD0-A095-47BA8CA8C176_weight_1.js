function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741824;
}
new F0();
new F0();
const o6 = {
};
new Proxy(Float32Array, o6);
new F0();
function f12() {
    const v13 = -Infinity;
    const o21 = {
        valueOf(a17) {
            for (const v18 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v13);
                } catch(e20) {
                }
            }
            return a17;
        },
    };
    return o21;
}
new Float64Array(13);
class C24 {
    static n(a26) {
        C24 *= -1478895337n;
    }
}
new BigInt64Array(251);
const v35 = new BigUint64Array(165);
v35.fill(255);
new Int8Array(64);
new Uint8Array([]);
