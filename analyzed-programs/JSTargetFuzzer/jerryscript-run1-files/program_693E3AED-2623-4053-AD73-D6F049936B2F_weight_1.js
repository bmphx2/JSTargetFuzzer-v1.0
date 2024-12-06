const v2 = new Float32Array(Float32Array, Float32Array, Float32Array);
function f3(a4, a5, a6) {
    Object.defineProperty(v2, "g", { configurable: true, get: f3 });
    let v7 = "b";
    v7.length = a4;
    v7 *= "7HI";
    return a4;
}
const v10 = f3();
let v12;
try { v12 = v10["parse"]("parse", f3, Map, Map, f3); } catch (e) {}
let v13;
try { v13 = ("parse").codePointAt(v10); } catch (e) {}
let v14;
try { v14 = ("parse").localeCompare(v13); } catch (e) {}
f3(f3, v10, f3);
const v19 = new Map();
function f20() {
    v12 &= Map;
    const o21 = {
        "apply": f3,
        "call": f3,
        "construct": f3,
        "defineProperty": f20,
        "getOwnPropertyDescriptor": f20,
        "getPrototypeOf": f20,
        "has": f3,
        "isExtensible": f3,
        "ownKeys": f3,
        "setPrototypeOf": f20,
    };
    new Proxy(v14, o21);
    return v19;
}
(565610224 / 2.2250738585072014e-308) % 2.2250738585072014e-308;
