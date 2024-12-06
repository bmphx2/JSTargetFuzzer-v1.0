function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -56647;
    this.d = -56647;
}
new F0();
new F0();
const v5 = new F0();
function f12() {
    return v5;
}
let v17 = 44256;
const v21 = new Uint8ClampedArray(4096);
if (-4096 == f12) {
    Object.defineProperty(v21, "byteOffset", { writable: true, configurable: true, get: f12 });
} else {
}
const v28 = new BigInt64Array(858);
const v31 = new Uint8ClampedArray(7);
function f32(a33, a34, a35, a36) {
    const o51 = {
        m(a38, a39, a40) {
            v17 ^= a40;
            [-2.220446049250313e-16,-1.0];
            [-2.660624983254484e+307,4.0,-6.224343469236721e+307,-1.7976931348623157e+308,-7.781808913468946e+307,-569211.3075469795,-316.07372880244884,-847553.4946799515];
            [169.64171117192063,-609574.235028561,-9.613757066389756,758172.407755943,1.2851649532322922e+308,-7.705740903077952e+306,5.0,323000.4456514192,-575157.0949599417];
            this instanceof Uint8ClampedArray;
            return Uint8ClampedArray;
        },
        set f(a46) {
            v31[this] = a35;
            let v47;
            try { v47 = this.m(-4096, 7); } catch (e) {}
            ({"a":v47,} = this);
            [257,536870888];
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            return a46;
        },
    };
    return o51;
}
const v52 = f32(858, 4096, 4096, v17);
const v53 = f32(-4096, 255, 858, v31);
f32(4096, 4096, -4096, 4096);
v52[8] |= 7;
for (const v55 in v28) {
    const v57 = [v55,f32,255];
    Reflect.apply(v53.m, v31, v57);
    function f60() {
        return v55;
    }
}
