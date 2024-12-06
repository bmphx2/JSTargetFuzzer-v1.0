function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -37891;
    this.h = -37891;
    this.a = -37891;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o17 = {
        __proto__: v3,
        "d": a7,
        o(a9, a10) {
            let v11;
            try { v11 = a10(a9, a7); } catch (e) {}
            return v11;
        },
        "f": a7,
        7: F0,
        [F0](a13, a14, a15, a16) {
            Object.defineProperty(a15, "f", { writable: true, configurable: true, enumerable: true, set: f6 });
            return v4;
        },
        3: v3,
        "h": a7,
        [F0]: F0,
    };
    return o17;
}
let v18 = f6(v5);
const v19 = f6(v4);
f6(v4);
class C21 extends f6 {
    static set h(a23) {
        let [...v24] = a23;
        new Map();
        v19 == v19 ? v19 : v19;
    }
    [v5];
    1538337478 = v5;
    [v3];
}
new C21();
new C21();
new C21();
const v33 = new Set();
function f34() {
    v18++;
    new Array(8);
    new Map();
    return Set;
}
const v44 = new Uint8ClampedArray(749);
new Int32Array(2259);
const v50 = new Uint8Array(453);
const v51 = `
    f34();
`;
const v54 = eval(v51);
try { v54(f34, v54, Uint8Array, v44, Uint8Array); } catch (e) {}
v50[-9223372036854775807] = v33;
const v56 = [268435456];
try { v56.findIndex(); } catch (e) {}
