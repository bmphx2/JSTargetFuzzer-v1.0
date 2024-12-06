const v4 = new Set();
let v11 = 39946;
function f14(a15, a16) {
    const o23 = {
        get h() {
            this[46667] = a15;
            try { a16(a16, a16); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a20) {
            this[a20] *= 46667;
            [] = v11;
            const v21 = super.a;
            let v22;
            try { v22 = new v21(v21, a20); } catch (e) {}
            v22[2147483648] = v22;
            return a20;
        },
    };
    return o23;
}
function f24() {
    return f14;
}
v4["forEach"](f24);
const v27 = f14(v11, 46667);
const v28 = f14(255, 46667);
const v29 = f14(255, 46667);
try { v29.m(9007199254740991); } catch (e) {}
f24();
v27.__proto__;
v4[2147483647] = Set;
-128 != 536870889n;
const v39 = new BigUint64Array(16);
const v42 = new Float32Array(3007);
const v45 = new Float32Array(3, Float32Array, v11);
Object.defineProperty(v39, "byteOffset", { configurable: true, value: v45 });
v42[v45];
let v47 = v42[2936874794];
v27.g = -1;
const v50 = [-4096];
Reflect.apply(Math.random, v28, v50);
let v53;
try { v53 = v47(v50, v28, v11, -4294967296); } catch (e) {}
let v55 = --v47;
const v56 = v27 | v55;
Object.defineProperty(v28, "h", { get: f24(Set, v56, Set, v47, Math, v53) });
v11 = v55;
const v61 = v27 ** v47;
!v56;
Math.clz32(v61);
--v55;
~v61;
