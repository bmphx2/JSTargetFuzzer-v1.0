let v0 = Array;
const v2 = new v0(3540);
new Uint32Array(249);
const v8 = new Uint8ClampedArray(255);
let v9 = 256;
const v11 = new Int32Array(v9);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a14;
    this.d = v2;
    v9 += 255;
    v0 -= v0;
    const v16 = v8;
    const v18 = Symbol.iterator;
    const o27 = {
        [v18]() {
            let v20 = 10;
            const o26 = {
                next() {
                    v20--;
                    const v24 = v20 == 0;
                    const o25 = {
                        "done": v24,
                        "value": v20,
                    };
                    return o25;
                },
            };
            return o26;
        },
    };
}
new F12(v2, 3540);
const v29 = new F12(v0, v2);
const v30 = new F12(v29, v2);
try { v0(v11, v0, v30); } catch (e) {}
v30.__proto__ = v2;
v0 = F12;
function f38() {
}
const v42 = [-1000000.0,f38,-807.6596022618603,-1000000.0];
const v43 = [v42,-1000000.0,0.014069366437978514,v42];
const v44 = [v43,f38,-807.6596022618603];
function* f48(a49, a50, a51, a52) {
    try { a51.padStart(a49, "object"); } catch (e) {}
    const o54 = {
        "construct": f38,
        "ownKeys": f38,
        "preventExtensions": f38,
        "a": -807.6596022618603,
        ...v42,
        __proto__: a49,
        7: 249,
        "g": v0,
    };
    const o55 = {
        "defineProperty": f48,
    };
    new Proxy(a51, o55);
    new Proxy(v44, o54);
    try {
        for (const v61 of "preventExtensions") {
            break;
        }
    } finally {
    }
    yield* "object";
    return a49;
}
f48(-807.6596022618603, "U7O", "U7O", v43);
