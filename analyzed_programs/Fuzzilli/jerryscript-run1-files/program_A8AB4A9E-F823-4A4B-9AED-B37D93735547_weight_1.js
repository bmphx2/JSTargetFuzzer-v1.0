function f0() {
}
function f1() {
    const o8 = {
        __proto__: f0,
        "e": f0,
        "h": f0,
        "f": f0,
        m() {
            const v5 = +1073741825;
            v5 ^ this;
            Math.sinh(v5);
            return this;
        },
        ...f0,
        "g": f0,
    };
    return o8;
}
let v9 = f1();
const v10 = f1();
const v11 = f1();
class C12 {
    static get c() {
        let {"f":v14,"g":v15,} = this;
        v9 = v15;
        const o19 = {
            "defineProperty": f1,
            "deleteProperty": f1,
            "get": f1,
            "getPrototypeOf": f1,
            "has": f1,
            "ownKeys": f1,
            "set": f1,
            "setPrototypeOf": f0,
        };
        const v21 = new Proxy(v14, o19);
        return v21;
    }
}
const v22 = new C12();
const v23 = new C12();
new C12();
new Float32Array(1861);
new Uint8ClampedArray(257);
new Int16Array(2721);
if (v9) {
} else {
    v10.length = 2;
}
v22.valueOf = v9;
try { v9(); } catch (e) {}
v11[2721] |= 2721;
v23[Symbol.toPrimitive];
