function f0() {
}
class C1 extends f0 {
    constructor() {
        super();
        const v3 = this[2];
        const v5 = Symbol.iterator;
        const o25 = {
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
                [v3,[this,o18,f0,o18,v3],C1];
                [v7,v3,v7,v7];
                return o18;
            },
        };
    }
}
const v26 = new C1();
const v27 = new C1();
new C1();
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a36;
}
const v37 = new F32(172311576, 1118218180, v27);
const v38 = new F32(172311576, 6, v37);
new F32(1118218180, 6, v38);
try { v26["p"](172311576, C1); } catch (e) {}
F32 | v27;
Math.sign(v37);
v27 & v37;
new Date();
const v52 = new Uint32Array(181);
let v54 = BigUint64Array;
let v55 = new v54(1);
let v56 = 253;
[v56,,v54,v55] = v52;
let v58;
try { v58 = v54["abs"](181, v56, v54); } catch (e) {}
let v62 = 10;
for (; v62--;) {
    new f0();
    v58 += -1.0282342846059749e+307;
}
new Uint16Array(v56);
Array(127).includes();
for (let i76 = 0; i76 < 2; i76++) {
    const v82 = new Function("x");
    v82.name;
}
Function();
