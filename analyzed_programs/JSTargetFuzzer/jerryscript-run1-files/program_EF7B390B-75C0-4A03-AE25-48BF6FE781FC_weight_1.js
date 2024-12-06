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
const v16 = f10(v8, v9);
function f20(a21, a22) {
    const o44 = {
        get h() {
            this[46667] = a21;
            try { a22(a22, a22); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        [f10](a26, a27, a28) {
            const v30 = Symbol.iterator;
            const o39 = {
                [v30]() {
                    let v32 = 10;
                    const o38 = {
                        next() {
                            v32--;
                            const v36 = v32 == 0;
                            const o37 = {
                                "done": v36,
                                "value": v32,
                            };
                            return o37;
                        },
                    };
                    return o38;
                },
            };
            return v7;
        },
        m(a41) {
            this[a41] *= 46667;
            [] = 39946;
            const v42 = super.a;
            let v43;
            try { v43 = new v42(v42, a41); } catch (e) {}
            v43[2147483648] = v43;
            return a41;
        },
    };
    return o44;
}
const v45 = f20(f20, 46667);
f20(255, 46667);
f20(255, 46667);
[-3.3767871465960546,1.261013980404025e+308];
[-Infinity,3.0,479.025142542132,8.289312495712414e+307,0.5641698703280683,-903249.8691829027];
[-3.0,NaN];
v16[2834701693] = 16;
new Uint8ClampedArray(0);
new Float64Array(0);
new BigUint64Array(5);
const v65 = new BigUint64Array(16);
class C67 extends BigUint64Array {
    [BigUint64Array];
    static [993749466] = f10;
}
new C67();
new C67();
new C67();
const v72 = new Float32Array(3007);
const v75 = new Float32Array(3);
Object.defineProperty(v65, "byteOffset", { configurable: true, value: v75 });
v72[v75];
const v77 = v72[2936874794];
v45.g = -1024;
let v80 = --v7;
const v81 = v45 | v80;
const v82 = v45 ** v77;
!v81;
Math.clz32(v82);
--v80;
~v82;
