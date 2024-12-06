function f0() {
    let v1 = 1e-15;
    const o15 = {
        "c": 2.0,
        [2.0]: 2.0,
        "b": v1,
        get e() {
            return [super.f,v1,v1,1.7976931348623157e+308,v1];
        },
        set f(a8) {
            let v7 = this;
            const v9 = v1 + v1;
            v9 | v1;
            with (a8) {
                f = v9;
                v7[v7];
                v7 |= v7;
                v1 <<= v1;
            }
        },
    };
    return o15;
}
const v16 = f0();
const v17 = f0();
f0();
function F19(a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a21;
}
const v22 = new F19(v17);
const v23 = new F19(v16);
new F19(v23);
const v26 = new Map();
try {
    Object.defineProperty(v26, 4096, { value: -53720 });
} finally {
    v22.b %= 8;
}
function f32(a33) {
    return arguments;
}
const v35 = f32(5, Uint32Array);
function f36(a37, a38) {
    const o39 = {
        ...v35,
    };
    return o39;
}
f36();
f36();
