const v2 = new Float64Array(3);
const v5 = new BigUint64Array(127);
const v8 = new Float32Array(12);
function f9(a10, a11, a12, a13) {
    const o30 = {
        ...v2,
        "g": a10,
        "h": Float32Array,
        "d": v2,
        get a() {
            const v15 = (a16, a17, a18, a19) => {
                try { v8.includes(this, a16); } catch (e) {}
                function F21(a23, a24, a25, a26) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.c = a23;
                    this.h = a18;
                    this.d = a17;
                }
                const v27 = new F21(a10, 12, this, a18);
                const v28 = new F21(Float64Array, a11, v27, a19);
                new F21(v28, a11, v2, 12);
                return a11;
            };
            return a11;
        },
    };
    return o30;
}
const v31 = f9(12, 127, 127, 127);
const v32 = f9(12, 12, 3, 12);
f9(127, 127, v31, 3);
function F34() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v37 = new F34();
const v38 = new F34();
const v39 = new F34();
let v41 = -937546.0274885385;
const v46 = [-1e-15,1000000.0,v41,v39];
const v47 = [1000000.0,-1e-15,v38,v46,-1e-15];
const v48 = [v39,v41,v39];
function f49(a50, a51) {
    const o71 = {
        "b": -1e-15,
        ...a51,
        [v48]: v38,
        __proto__: v38,
        "d": v39,
        "f": a51,
        [a50]: v46,
        set a(a53) {
            this.__proto__ = v47;
            v48[0.22410269410035233] = a50;
            const v55 = Symbol.iterator;
            const o70 = {
                [v55]() {
                    let v57 = 10;
                    const o69 = {
                        next() {
                            v57--;
                            const v61 = v57 == 0;
                            const o62 = {
                                "done": v61,
                                "value": v57,
                            };
                            try { a51["n"]("n", a53); } catch (e) {}
                            ~a53;
                            const o66 = {
                                "apply": Symbol,
                                "call": f9,
                                "construct": f9,
                                "defineProperty": f49,
                                "deleteProperty": f49,
                                "get": f9,
                                "getOwnPropertyDescriptor": Symbol,
                                "getPrototypeOf": Symbol,
                                "has": f49,
                                "isExtensible": Symbol,
                                "ownKeys": f49,
                                "preventExtensions": Symbol,
                                "setPrototypeOf": f9,
                            };
                            new Proxy(this, o66);
                            return o62;
                        },
                    };
                    return o69;
                },
            };
        },
    };
    return o71;
}
Object.defineProperty(v32, BigUint64Array, { get: f49, set: f9 });
v46["flat"]();
F34 << v5;
let {"c":v75,"g":v76,"length":v77,} = "flat";
f49(v48, v37);
f49(v48, v38);
const v80 = f49(v47, v48);
with (v39) {
    let v81 = a;
    let v83 = `rizPp${0.22410269410035233}number${v80}sticky${426.7417148362349}-29565${v81 || v81}atan2`;
    ({"length":v81,} = v83);
    v41 |= 426.7417148362349;
    let v86 = -9;
    Math.round(v86);
    const v89 = v83++;
    v86++;
    Math.fround(v89);
    Math.sign(v86);
    v86 || v83;
}
