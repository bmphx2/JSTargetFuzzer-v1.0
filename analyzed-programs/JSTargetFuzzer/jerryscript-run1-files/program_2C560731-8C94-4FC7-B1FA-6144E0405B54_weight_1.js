function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1;
    this.h = 1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v3;
}
new F6(v4);
const v10 = new F6(v3);
new F6(v5);
let v18 = 4294967297;
v5.e = v10;
v18 = 2147483649;
new BigUint64Array(257);
new Uint32Array(9);
new Uint8ClampedArray(10);
const v29 = new BigInt64Array(512);
for (const v30 of v29) {
    async function f32(a33, a34) {
        await -1;
        return a33;
    }
    f32();
}
