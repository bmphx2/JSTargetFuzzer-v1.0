let v1 = new WeakSet();
function f5(a6) {
    const o9 = {
        "f": v1,
        ...v1,
        "d": 1.3366792198821723e+308,
        ...v1,
        94: a6,
        "c": 1.3366792198821723e+308,
        16: 1000.0,
        "h": f5,
        "a": 1.3366792198821723e+308,
        get b() {
            this.f;
            v1 = this;
            return f5;
        },
        9: v1,
        "global": v1,
        "g": 1.3366792198821723e+308,
        [-2]: 1000.0,
        ...v1,
    };
    return a6;
}
f5(1.3366792198821723e+308, WeakSet);
f5(-2.2250738585072014e-308);
f5(1000.0);
const v21 = new Uint32Array(9);
new Uint16Array(v21);
