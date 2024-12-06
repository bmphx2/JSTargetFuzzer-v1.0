function f6(a7, a8) {
    const o20 = {
        __proto__: a7,
        "h": a8,
        set b(a10) {
            Math.sin(8);
            129 >> 3.985796687952849;
            const v17 = 4294967295 ** 3.985796687952849;
            v17 && 129;
            ~v17;
        },
    };
    return o20;
}
f6(127, 7);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    try { a24(F22, ...arguments); } catch (e) {}
}
for (let v28 = 0; v28 < 5; v28++) {
    const v29 = `
        function F30(a32, a33) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v29);
}
f6(7, 106297922);
const v37 = f6(7, 65535);
const v41 = new Uint32Array(181);
let v43 = BigUint64Array;
if (129 !== v41) {
    const o45 = {
        "apply": f6,
        "call": f6,
        "construct": f6,
        "deleteProperty": f6,
        "get": f6,
        "getOwnPropertyDescriptor": f6,
        "getPrototypeOf": f6,
        "has": f6,
        "isExtensible": f6,
        "set": f6,
        "setPrototypeOf": f6,
    };
    new Proxy(v41, o45);
} else {
    Object.defineProperty(v37, "d", { writable: true, configurable: true, set: f6 });
}
let v48 = new v43(1);
let v49 = 253;
[v49,,v43,v48] = v41;
function F51() {
    if (!new.target) { throw 'must be called with new'; }
}
const v55 = new Array(3834);
v55.length = 2;
function f57(a58, a59) {
    for (let v60 = 0; v60 < 32; v60++) {
        const t59 = "abs";
        t59["p" + v60] = v60;
    }
    const o68 = {
        m(a64, a65) {
            try {
            } catch(e66) {
                a59 == e66;
            }
            return v55;
        },
    };
    return a58;
}
try { v43["abs"](181, v49, v43); } catch (e) {}
class C75 {
    valueOf(a77, a78) {
        +4n;
    }
}
new Uint16Array(v49);
for (let i86 = 0; i86 < 2; i86++) {
    const v92 = new Function("x");
    const o93 = {
        "deleteProperty": v92,
        "isExtensible": v92,
        "preventExtensions": Array,
        "set": Array,
    };
    new Proxy(C75, o93);
    v92.name;
}
Function();
