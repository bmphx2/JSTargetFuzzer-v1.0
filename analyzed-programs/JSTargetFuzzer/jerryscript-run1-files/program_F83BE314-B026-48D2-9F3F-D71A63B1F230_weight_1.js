function f0() {
}
class C1 extends f0 {
    constructor() {
        super();
        this[2];
        const v5 = Symbol.iterator;
        const o19 = {
            [v5]() {
                let v7 = 10;
                const o18 = {
                    next() {
                        v7--;
                        const v11 = v7 == 0;
                        const o17 = {
                            "done": v11,
                            "value": v7,
                            o(a13, a14, a15) {
                                a13.h = a15;
                                a15 /= a13;
                                0 === this;
                                return this;
                            },
                        };
                        return o17;
                    },
                };
                return o18;
            },
        };
    }
}
const v20 = new C1();
const v21 = new C1();
new C1();
function F26(a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a30;
}
const v31 = new F26(172311576, 1118218180, v21);
const v32 = new F26(172311576, 6, v31);
new F26(1118218180, 6, v32);
try { v20["p"](172311576, C1); } catch (e) {}
F26 | v21;
Math.sign(v31);
v21 & v31;
new Date();
const v46 = new Uint32Array(181);
let v48 = BigUint64Array;
let v49 = new v48(1);
let v50 = 253;
[v50,,v48,v49] = v46;
let v52;
try { v52 = v48["abs"](181, v50, v48); } catch (e) {}
let v56 = 10;
for (; v56--;) {
    new f0();
    v52 += -1.0282342846059749e+307;
}
new Uint16Array(v50);
for (let i66 = 0; i66 < 2; i66++) {
    const v72 = new Function("x");
    v72.name;
}
Function();
