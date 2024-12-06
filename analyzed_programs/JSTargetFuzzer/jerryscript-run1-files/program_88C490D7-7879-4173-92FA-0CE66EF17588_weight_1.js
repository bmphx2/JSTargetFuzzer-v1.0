function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -1024;
    this.c = -1024;
}
const v3 = new F0();
new F0();
new F0();
function f6() {
    return F0;
}
function f11(a12, a13) {
    const o23 = {
        "b": a13,
        [127](a15, a16, a17, a18) {
            const v19 = ~-536870912;
            const v20 = [f6,v19];
            try {
                super.padEnd(v20, v19, a12, v20);
            } catch(e22) {
            }
            return -536870912;
        },
    };
    return o23;
}
f11(f11(F0, 8), 127);
f11(v3, 127);
new Uint16Array(3);
new Float32Array(128);
Float32Array > 1;
const v40 = ("-1604200484").__proto__;
try { new v40(); } catch (e) {}
new Uint16Array(0);
function f44() {
    return Uint16Array;
}
function f48(a49, a50) {
    const o57 = {
        get h() {
            this[46667] = a49;
            try { a50(a50, a50); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a54) {
            this[a54] *= 46667;
            [] = 39946;
            const v55 = super.a;
            let v56;
            try { v56 = new v55(v55, a54); } catch (e) {}
            v56[2147483648] = v56;
            return a54;
        },
    };
    return o57;
}
const v58 = f48(39946, 46667);
f48(255, 46667);
f48(255, 46667);
const v66 = new BigUint64Array(16);
const v69 = new Float32Array(3007);
const v72 = new Float32Array(3);
Object.defineProperty(v66, "byteOffset", { configurable: true, value: v72 });
v69[v72];
let v74 = v69[2936874794];
v58.g = -1024;
let v77 = --v74;
const v78 = v58 | v77;
const v79 = v58 ** v74;
!v78;
Math.clz32(v79);
--v77;
~v79;
