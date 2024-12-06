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
    const o12 = {
        __proto__: v3,
        "d": a7,
        o(a9, a10) {
            let v11;
            try { v11 = a10(a9, a7); } catch (e) {}
            return v11;
        },
        "f": a7,
        7: F0,
        "h": a7,
        [F0]: F0,
    };
    return o12;
}
f6(v5);
const v14 = f6(v4);
f6(v4);
class C16 extends f6 {
    static set h(a18) {
        let [...v19] = a18;
        new Map();
        v14 == v14 ? v14 : v14;
    }
    [v5];
    1538337478 = v5;
    [v3];
}
new C16();
new C16();
new C16();
const v28 = new Set();
function f29() {
    return Set;
}
const v33 = new Uint8ClampedArray(749);
new Int32Array(2259);
const v39 = new Uint8Array(453);
const v40 = `
    f29();
`;
const v43 = eval(v40);
try { v43(f29, v43, Uint8Array, v33, Uint8Array); } catch (e) {}
v39[-9223372036854775807] = v28;
const v45 = [268435456];
try { v45.findIndex(); } catch (e) {}
