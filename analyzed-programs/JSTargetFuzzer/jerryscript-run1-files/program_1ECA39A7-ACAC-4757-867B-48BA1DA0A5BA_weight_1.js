([-80.9416039412763,1e-15]).splice(Float32Array - Float32Array, -9007199254740990, 257);
const v10 = new Set();
function f14(a15, a16, a17, a18) {
    const o32 = {
        p(a20, a21, a22) {
            Object.defineProperty(this, 12, { writable: true, value: a18 });
            this.f = a17;
            v10[3];
            function F24(a26, a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a28;
                this.a = 0.0;
                this.h = a21;
            }
            new F24(12, 12, 255);
            new F24(1073741823, a20, 255);
            const v31 = new F24(a15, a21, 1073741823);
            return v31;
        },
    };
    return o32;
}
f14(12, 0.0, 0.0, 255);
f14(12, 2.2250738585072014e-308, 2.2250738585072014e-308, 12);
f14(1073741823, 2.2250738585072014e-308, v10, 12);
const v41 = new Uint32Array(181);
let v43 = BigUint64Array;
let v44 = new v43(1);
let v45 = 253;
[v45,,v43,v44] = v41;
try { v43["abs"](181, v45, v43); } catch (e) {}
new Uint16Array(v45);
for (let i58 = 0; i58 < 2; i58++) {
    const v64 = new Function("x");
    v64.name;
}
Function();
