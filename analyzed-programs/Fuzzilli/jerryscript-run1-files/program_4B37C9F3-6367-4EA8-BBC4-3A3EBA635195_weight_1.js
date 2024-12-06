const v0 = [];
const v1 = [268435439,9223372036854775807,4,-9223372036854775807,127,1073741823,1073741824];
const v2 = [10,62719,-1200896305,1073741823,4294967296];
const v3 = [10968,-65535,1073741823];
function f5(a6) {
    const o17 = {
        "c": true,
        "g": a6,
        [a6](a8, a9) {
            try { a8(v3, a6, a6, this); } catch (e) {}
            const v13 = a8 % a9;
            Math.floor(a8);
            ~v13;
            Math.min(9007199254740990);
            return a6;
        },
    };
    return o17;
}
const v18 = f5(v2);
const v19 = f5(v2);
const v20 = f5(v0);
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v19;
    this.g = v3;
}
new F21(v18, v18, v0);
const v27 = new F21(v18, v20, v1);
const v28 = new F21(v20, v19, v0);
try {
    v28[v0[v1]] = v20;
} finally {
    const v30 = v28 / v28;
    [v30,v30,v20,v30];
}
Object.defineProperty(v1, v27, { writable: true, enumerable: true, value: v0 });
v18[v1] -= v27;
v27.valueOf = f5;
