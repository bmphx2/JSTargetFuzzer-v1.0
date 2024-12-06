function f3() {
    return -9007199254740991;
}
function f4() {
    return 9223372036854775807;
}
class C5 {
    constructor(a7) {
        const v9 = Symbol.iterator;
        const o18 = {
            [v9]() {
                let v11 = 10;
                const o17 = {
                    next() {
                        v11--;
                        const v15 = v11 == 0;
                        const o16 = {
                            "done": v15,
                            "value": v11,
                        };
                        return o16;
                    },
                };
                return o17;
            },
        };
    }
}
new C5(-9007199254740991);
new C5(-9007199254740991);
new C5(127);
new BigInt64Array(2502);
const v34 = new Float32Array(7);
const v37 = new BigInt64Array(3080);
const v38 = [v37,BigInt64Array];
[Float32Array,v38,Float32Array,3080];
[9,BigInt64Array,v38,2502];
const v41 = [4.0,585.4254908683372,1000000000.0,-1000000000000.0,-1.0,0.6537834056952333,2.8414523441604373e+307];
let v42 = [422701.2031871984,-1000.0];
const v43 = [-5.35279222584575e+307,-0.0,4.0,1000000000000.0];
const v46 = new Uint32Array(3164);
new Int8Array(129);
new Uint32Array(4);
class C53 {
    constructor(a55, a56) {
        function F57(a59, a60, a61, a62) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = v46;
            this.e = this;
            this.a = a62;
        }
        new F57(129, this, 4, 129);
        new F57(4, v42, a55, a55);
        new F57(a55, this, a55, a55);
    }
    get d() {
        const v69 = this[Symbol.d];
        new Int8Array(v69, 129, v69);
        sticky = this;
        return v42;
    }
}
new C53(3164, v42);
const v72 = new C53(4, v43);
const v73 = new C53(3164, v43);
v73[256] = v73;
v72 >= Uint32Array ? v72 : Uint32Array;
(3080)[129];
new Uint32Array(v73);
for (const v79 in C53) {
    v42 = 268435439;
}
const o80 = {
};
new Proxy(v41, v46, 129, v34, 2502);
Math.cbrt(Int8Array);
let v85 = 4 / Int8Array;
const v86 = +v85;
Int8Array / 0;
Math.round(v86);
v85--;
~4;
