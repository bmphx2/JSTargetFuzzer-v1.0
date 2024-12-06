function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 129;
    this.e = 129;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new Int8Array(8);
const v11 = new Uint8Array(3);
new Float64Array(4);
switch (v5) {
    case 3:
        +F0;
        break;
}
function f16(a17, a18, a19) {
    const o20 = {
        2655303842: a18,
        ...v4,
        [-2]: v4,
        "e": v11,
    };
    return o20;
}
f16(v11, Uint8Array, v4);
f16(f16(3, v8, v4), v3, v3);
