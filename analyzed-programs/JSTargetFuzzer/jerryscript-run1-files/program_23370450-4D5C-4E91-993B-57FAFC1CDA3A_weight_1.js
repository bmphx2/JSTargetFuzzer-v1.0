function f0() {
}
[0.6187441416033705];
[-40636.540068119066,1000000000.0,2.2250738585072014e-308,-Infinity,4.212722314497675,-5.0,-1000000.0];
const v3 = [1.1983157555290591e+308,-2.2250738585072014e-308,-438.8599042109271,-2.771797408385625,-8.766435094086377,1000000000.0,-0.0,-9.468683974079763,-680692.75425141,766.6777400405513];
function f4() {
    return v3;
}
const v9 = new WeakSet();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a13;
}
new F10(-65535, -9223372036854775807, v9, -9223372036854775807);
new F10(-9223372036854775807, -268435456, v9, -9223372036854775807);
new F10(-9223372036854775807, -268435456, -268435456, -9223372036854775807);
const v21 = new Array(10);
let v23 = 4096;
function f25(a26, a27, a28, a29) {
    const o39 = {
        "g": v23,
        ...a29,
        "e": a27,
        set b(a31) {
            function F32(a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a34;
            }
            const v36 = new F32(a29, 129);
            const v37 = new F32(a28, v36);
            new F32(v37, 481111932);
        },
    };
    return o39;
}
let v40 = f25(v23, 481111932, 129, v21);
f25(10, 481111932, 10, f25);
f25(v40, WeakSet, 481111932, v23);
v40.g;
try {
    let v44;
    try { v44 = v40.isSealed(); } catch (e) {}
    v40 = v44;
    v23 = v44;
} catch(e45) {
    e45[0] = e45;
    try { e45(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
