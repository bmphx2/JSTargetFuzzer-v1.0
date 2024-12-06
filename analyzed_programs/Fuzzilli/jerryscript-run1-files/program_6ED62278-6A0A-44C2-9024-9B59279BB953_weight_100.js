function f9() {
    return 6;
}
class C10 extends f9 {
    valueOf(a12, a13, a14, a15) {
        this ** a14;
        f9();
        const o18 = {
            "defineProperty": f9,
            "deleteProperty": f9,
            "get": f9,
            "getOwnPropertyDescriptor": f9,
            "has": f9,
            "isExtensible": f9,
            "ownKeys": f9,
            "preventExtensions": f9,
            "setPrototypeOf": f9,
        };
        new Proxy(this, o18);
        return this;
    }
}
new C10();
new Float32Array(1613);
new Float64Array(188);
new Int8Array(8);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a34;
    this.h = -4294967295n;
}
const v36 = new F32(52106n, -288480851n);
v36.a = -65535;
new Uint8ClampedArray(34);
const v41 = new F32(52106n, -288480851n);
const v42 = new F32(v36, -2147483648n);
function f43(a44, a45, a46, a47) {
    const o65 = {
        "d": v42,
        "h": a47,
        512: -1232742435n,
        "c": a45,
        9: a44,
        get b() {
            new Uint8ClampedArray(90);
            new Int16Array(2);
            Math.log10(-4);
            Math.atan2(a47 << 51733, 459899416);
            const v64 = new BigUint64Array(a44);
            return v64;
        },
    };
    return v41;
}
f43(v42, -2147483648n, -2147483648n, v41);
const v68 = f43(f43(v41, -54195n, -2147483648n, v42), -2147483648n, 52106n, F32);
new Date();
const v71 = `
    const v72 = Date[-1];
    function F73(a75, a76, a77, a78) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = F73;
        this.b = a77;
        [-4.0,this];
        new WeakMap();
        const v84 = new Date();
        class C85 extends Date {
            static [v84] = Date;
            constructor(a87, a88) {
                super(a87);
                this[10];
                const o90 = {
                    "apply": Date,
                    "call": Date,
                    "deleteProperty": Date,
                    "getOwnPropertyDescriptor": Date,
                    "has": Date,
                    "isExtensible": Date,
                    "ownKeys": Date,
                    "set": Date,
                    "setPrototypeOf": this,
                };
                new Proxy(this, o90);
            }
        }
    }
    new F73(v68, v72, v68, v72);
    new F73(v72, 52106n, v72, v42);
    new F73(v68, 52106n, v68, v42);
`;
eval(v71);
