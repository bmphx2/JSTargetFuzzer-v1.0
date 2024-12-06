function f3(a4, a5) {
    const o21 = {
        p(a7, a8) {
            this ^ a4;
            const v11 = Symbol.iterator;
            const o20 = {
                [v11]() {
                    let v13 = 10;
                    const o19 = {
                        next() {
                            v13--;
                            const v17 = v13 == 0;
                            const o18 = {
                                "done": v17,
                                "value": v13,
                            };
                            return o18;
                        },
                    };
                    return o19;
                },
            };
            return o20;
        },
    };
    return o21;
}
const v22 = f3(-5, -56979);
const v23 = f3(-56979, -5);
f3(-5, v23);
const v25 = [f3];
const v26 = [-56979,v25];
const v27 = [v26,v23,v25,v23,v22];
new Float32Array(3);
const v36 = new Uint32Array(127);
new Uint8Array(5);
let v40 = 435;
const v42 = new Int32Array(v40);
new Uint32Array(154);
new Int8Array(1816);
class C52 {
    p(a54, a55) {
        this.f;
        let [v57,v58] = a55;
        const v59 = this instanceof a55;
        function F60(a62, a63, a64) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = v58;
            this.c = 127;
            this.b = a62;
        }
        new F60(v59, 576127486, 5.437557809968392e+307);
        new F60(this, 127, a54);
        new F60(127, a54, 576127486);
        return F60;
    }
}
const v68 = new C52();
let v69;
try { v69 = v36.reverse(); } catch (e) {}
const v71 = new Set();
const v72 = f3(v71, v26);
try { new v69(v42, 3, 5, v72); } catch (e) {}
const v74 = new C52();
const v75 = new C52();
const v78 = new Int16Array(512);
v68[6] = v78;
v40 = 127;
function F79(a81, a82, a83, a84) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a82;
}
const v85 = new F79(v26, 512, v23, v75);
const v86 = new F79(v27, -56979, v85, 5);
new F79(v25, v40, v86, Set);
new Int32Array(257);
new Int8Array(64);
for (const v94 in C52) {
    const v95 = C52[2216008031];
    const v96 = 512 === v95;
    v96 * v96;
    v75.length = 2;
    try { v75.p(v95, Uint8Array, v86); } catch (e) {}
    v86.__proto__;
    v96 ? 512 : v95;
}
v74[Int16Array] = 64;
v68[65537] = v74;
Math.ceil(512);
Math.atan(1);
Math.fround(7);
Math.expm1(1);
Math.hypot(512);
Math.tan(64 >>> 512);
