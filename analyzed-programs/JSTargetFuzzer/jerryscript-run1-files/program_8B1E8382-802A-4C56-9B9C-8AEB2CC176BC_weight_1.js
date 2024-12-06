function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.b = -128;
    this.c = -9007199254740990;
}
new F3(-128, -9007199254740990);
const v8 = new F3(-128, -128);
new F3(v8, -9007199254740990);
new Float64Array(2);
new Float64Array(16);
new BigUint64Array(2264);
function f24(a25, a26) {
    const o33 = {
        get h() {
            this[46667] = a25;
            try { a26(a26, a26); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a30) {
            this[a30] *= 46667;
            [] = 39946;
            const v31 = super.a;
            let v32;
            try { v32 = new v31(v31, a30); } catch (e) {}
            v32[2147483648] = v32;
            return a30;
        },
    };
    return o33;
}
const v34 = f24(39946, 46667);
f24(255, 46667);
f24(255, 46667);
const v42 = new BigUint64Array(16);
const v45 = new Float32Array(3007);
const v48 = new Float32Array(3);
Object.defineProperty(v42, "byteOffset", { configurable: true, value: v48 });
v45[v48];
let v50 = v45[2936874794];
v34.g = -1024;
let v53 = --v50;
const v54 = v34 | v53;
const v55 = v34 ** v50;
!v54;
Math.clz32(v55);
--v53;
~v55;
const v60 = new Array(10);
let v62 = 4096;
const o65 = {
    ...undefined,
};
[,];
function f67(a68, a69, a70, a71) {
    const o81 = {
        "g": v62,
        ...a71,
        "e": a69,
        set b(a73) {
            function F74(a76, a77) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a76;
            }
            new F74(a71, 129);
            new F74(a70, a70);
            new F74(F74, 481111932);
        },
    };
    return o81;
}
let v82 = f67(v62, 481111932, 129, v60);
f67(10, 481111932, 10, f67);
f67(v82, v62, 481111932, v62);
v82.g;
try {
    let v86;
    try { v86 = v82.isSealed(); } catch (e) {}
    v82 = v86;
    v62 = v86;
} catch(e87) {
    e87[0] = e87;
    try { e87(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
("replaceAll")["startsWith"]();
new Int16Array(213);
