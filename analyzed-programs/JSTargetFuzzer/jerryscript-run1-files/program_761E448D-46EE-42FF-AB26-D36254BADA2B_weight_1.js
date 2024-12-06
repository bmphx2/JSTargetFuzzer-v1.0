function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1648964862;
    this.f = -1648964862;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o14 = {
        "h": a7,
        __proto__: v5,
        [a7](a9, a10) {
            v4 /= v3;
            if (a9) {
                const v11 = [a7,v4,a10,a7,F0];
                [[v11,v11],a9,v11,v11];
            } else {
                this.h >>= v4;
            }
            return v3;
        },
    };
    return o14;
}
const v15 = f6(v5);
f6(v5);
f6(v5);
[536870889,1797125442,-3,-65536];
[-290303843,7,4,65537,-276043953];
[-4294967297,65536];
new Float64Array(8);
new Uint16Array(3867);
new Float32Array(8);
async function f30(a31, a32, a33) {
    await 512;
    await 9007199254740990;
    return v15;
}
f30(f30, f30, f30);
