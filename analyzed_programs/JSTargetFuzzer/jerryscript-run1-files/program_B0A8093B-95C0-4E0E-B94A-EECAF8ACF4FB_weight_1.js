function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.EPSILON = -65537;
    this.a = -5n;
    const t4 = -65537;
    t4.g = a9;
}
const v11 = new F6(-128, -1n, -3n);
const v12 = new F6(-1n, -5n, -3n, -10, -128);
const v13 = new F6(F6, -3n, -1n);
function f14(a15, a16) {
    const o24 = {
        "g": a15,
        [v12]: a16,
        ...v11,
        "e": v12,
        [a15]: v13,
        ...f14,
        get d() {
            this[-128];
            super.f;
            let v23;
            try {
            const t0 = 1309065219;
            v23 = t0(F6, -65537);
            } catch (e) {}
            return v23;
        },
    };
    return v13;
}
f14(-10, v12);
f14(-10, v13);
f14(-10, v11);
const v28 = [255,-1073741824,1073741823,65535,-864624729,3,-7551,1972894734,-940017794];
function f29(a30, a31, a32) {
    return arguments;
}
const v34 = f29(f29, v28, f29, f29);
let v35 = "-9223372036854775808";
let v36 = 6;
let v37 = -4294967295;
[v35,,v36,v37] = v34;
async function f38(a39, a40) {
    new Proxy();
    return v12;
}
f38(v35, v34);
