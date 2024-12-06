function f0() {
}
new BigUint64Array(3);
new Int16Array(3);
new Float32Array(8);
const t5 = Symbol.species;
t5.description <<= 2006448021;
let v16 = 44256;
const v19 = new Uint32Array(858);
const v21 = new Uint16Array();
function f22(a23, a24, a25, a26) {
    const o31 = {
        m(a28, a29, a30) {
            v16 ^= a30;
            return 858;
        },
    };
    return o31;
}
const v32 = f22();
for (const v33 in v19) {
    const v35 = [v33,f22,Reflect];
    Reflect.apply(v32.m, v21, v35);
}
