function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -1119082502;
    this.g = -1119082502;
    this.b = -1119082502;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v4;
}
let v7 = [-5.0,-2.220446049250313e-16,2.2250738585072014e-308,997018.3207835227];
const v8 = [-159233.36325459788,-1.7976931348623157e+308,-305.427734342961,0.27957202893223576,-5.0];
const v9 = [0.06002057642242398];
function f10(a11, a12) {
    const o13 = {
        ...v3,
        [-2]: v7,
        ...a11,
        __proto__: v4,
        "a": a12,
        "b": a11,
        "c": v5,
        "d": v4,
        "g": a12,
        "f": v5,
        ...v3,
        [a11]: v4,
    };
    return o13;
}
f10(v9, f10(v9, v8));
f10(v8, v9);
function f20(a21, a22) {
    const o29 = {
        get h() {
            this[46667] = a21;
            try { a22(a22, a22); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a26) {
            this[a26] *= 46667;
            [] = 39946;
            const v27 = super.a;
            let v28;
            try { v28 = new v27(v27, a26); } catch (e) {}
            v28[2147483648] = v28;
            return a26;
        },
    };
    return o29;
}
const v30 = f20(f20, 46667);
f20(255, 46667);
f20(255, 46667);
const v38 = new BigUint64Array(16);
const v41 = new Float32Array(3007);
const v44 = new Float32Array(3);
Object.defineProperty(v38, "byteOffset", { configurable: true, value: v44 });
v41[v44];
const v46 = v41[2936874794];
v30.g = -1024;
let v49 = --v7;
const v50 = v30 | v49;
const v51 = v30 ** v46;
!v50;
Math.clz32(v51);
--v49;
~v51;
