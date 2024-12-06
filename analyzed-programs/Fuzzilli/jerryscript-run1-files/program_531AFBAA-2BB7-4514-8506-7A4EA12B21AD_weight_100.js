function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 42479044;
    this.b = 42479044;
    this.a = 42479044;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
}
const v10 = new F6(v4, v4);
const v11 = new F6(v3, v5);
const v12 = new F6(v5, v3);
class C13 {
    [F6];
    static {
        if (v4) {
            new Map();
        } else {
            this.__proto__ = v12;
        }
    }
    static [v12];
    static o(a18, a19, a20, a21) {
        a21.f;
        v3 >>> a18;
        v5.f;
        [-2147483648];
        [129,4294967296,-65536,13,-9007199254740992];
        [9223372036854775807,-1630269491,1000,32219,256,-1132445625,-65537,455021509,13,163950534];
        return v5;
    }
}
const v28 = new C13();
const v29 = new C13();
const v30 = new C13();
function f31(a32, a33, a34) {
    const o46 = {
        [a34](a36, a37, a38) {
            a37 & a36;
            C13["o"](v10, v4, v28, v5, v29);
            a37 <= v3[3448895265];
            e = a38;
            try { v29["valueOf"](); } catch (e) {}
            return v10;
        },
        "b": C13,
        "g": v28,
        "h": a32,
        "d": v4,
    };
    return o46;
}
const v47 = f31(v11, v3, v10);
f31(v11, v5, v30);
f31(C13, v4, v12);
v5[16] = F6;
v29.b = v11;
v5.f /= v11;
function f50() {
    v29 >= v47;
    return arguments;
}
f50(f50);
v30[6] = v11;
