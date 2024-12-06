function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v1 = this;
    v1.g = 6;
    for (const v3 in v1) {
        v1 ^= v1;
    }
    new BigUint64Array(7);
    new Int8Array(3751);
    new Uint8Array(145);
    v1.f = 6;
    v1.d = 6;
}
let v13 = new F0();
new F0();
const v18 = -(v13 / 536870912);
Math.fround(v18 ** 536870912);
Math.floor(536870912);
Math.sign(v18);
v13++;
new F0();
new Uint8ClampedArray(180);
new BigUint64Array(512);
new Uint8Array(3892);
const v36 = new Uint8Array();
delete v36[-2];
