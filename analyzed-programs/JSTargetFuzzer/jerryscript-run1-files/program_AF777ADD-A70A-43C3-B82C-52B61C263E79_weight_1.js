new Int16Array(256);
new Uint32Array(4);
new BigUint64Array(2);
let v12 = -2147483649n;
let v13 = 44256;
const v16 = new Uint32Array(858);
const v18 = new Uint16Array();
function f19(a20, a21, a22, a23) {
    const o28 = {
        m(a25, a26, a27) {
            v13 ^= a27;
            return 858;
        },
    };
    return o28;
}
const v29 = f19();
for (const v30 in v16) {
    const v32 = [v30,f19,Reflect];
    Reflect.apply(v29.m, v18, v32);
}
v12 &= 4n;
