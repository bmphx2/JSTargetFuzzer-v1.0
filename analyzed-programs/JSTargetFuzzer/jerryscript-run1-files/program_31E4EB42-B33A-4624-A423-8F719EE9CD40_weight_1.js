const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v0;
    this.d = v0;
}
const v3 = new F1();
let v4 = new F1();
new F1();
let v7 = "description";
class C9 extends F1 {
    static set c(a11) {
        v4 = a11;
    }
    constructor(a16, a17, a18) {
        super();
        let v21 = 0;
        let v22 = 4294967295;
        const v23 = v22--;
        const v24 = v22 && v21;
        const v25 = v21++;
        v24 & v24;
        v23 || v25;
        Math.cos(v21);
        --v7;
    }
}
new C9(F1, F1, v4);
const v31 = new C9(v7, v3, "NaN");
new C9("bigint", v31, v4);
new WeakSet();
new WeakMap();
function f40() {
    return WeakMap;
}
new Int8Array(5);
new Function(190);
new Float32Array(127);
const v54 = [9007199254740990];
v54.length = 13;
const o56 = {
    __proto__: v54,
};
function f59(a60, a61) {
    const o68 = {
        get h() {
            this[803142468] = a60;
            try { a61(a61, a61); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a65) {
            this[a65] *= 803142468;
            [] = 39946;
            const v66 = super.a;
            let v67;
            try { v67 = new v66(v66, a65, a65, 190); } catch (e) {}
            v67[2147483648] = v67;
            return a65;
        },
    };
    return o68;
}
const v69 = f59(39946, 803142468);
f59(255, 803142468);
f59(255, 803142468);
const v78 = new Int32Array(512);
for (const v79 of v78) {
    const v82 = new ArrayBuffer(10);
    new Int8Array(v82);
}
const v86 = new BigUint64Array(16);
const v89 = new Float32Array(3007);
const v92 = new Float32Array(3);
Object.defineProperty(v86, "byteOffset", { configurable: true, value: v92 });
v89[v92];
let v94 = v89[2936874794];
v69.g = -1024;
let v97 = --v94;
const v98 = v69 | v97;
const v99 = v69 ** v94;
!v98;
const v101 = [5.409837218751631e+306,5.0,0.631320185332836,-1.0,-697.5426783793084,-235222.86486059672,0.06240438650725588,-2.0,0.3995307120555006,2.2250738585072014e-308];
let v102;
try { v102 = v101.filter(v101, v101); } catch (e) {}
Symbol(v102);
new Int32Array(Int32Array);
Math.clz32(v99);
--v97;
~v99;
