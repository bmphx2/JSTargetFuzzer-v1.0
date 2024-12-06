function f3(a4) {
    const o9 = {
        "d": a4,
        "c": 16,
        "f": 16,
        "g": 16,
        "a": -536870912,
        "h": -536870912,
        ...16,
        get b() {
            let v6;
            try {
            const t0 = 16;
            v6 = new t0(-536870912, -536870912, this, this, a4, 16);
            } catch (e) {}
            v6 && a4;
            return v6 << 16;
        },
        "b": a4,
        __proto__: a4,
    };
    return o9;
}
const v10 = f3(-9223372036854775808);
const v11 = f3(-9223372036854775808);
const v12 = f3(-9223372036854775808);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a19;
}
const v22 = new F16(16, v10, 16, 5);
new F16(16, v22, -536870912, -2147483648);
new F16(53952, v12, -9223372036854775808, 16);
const v25 = [F16,53952,-9223372036854775808,v10];
[[-2147483648,v25,5,5],v11,F16,v22];
v22[10] ||= 53952;
for (let [...v28] of v25) {
    const o31 = {
        "maxByteLength": 4294967296,
    };
    const v33 = new ArrayBuffer(257, o31);
    new Uint32Array(v33);
}
