function f3() {
    return "symbol";
}
new BigInt64Array(9);
new Uint16Array(16);
new Uint32Array(5);
const v15 = new Uint32Array(858);
const v17 = new Uint16Array();
const o24 = {
    m(a19, a20, a21) {
        return eval(a19);
    },
};
for (const v25 in v15) {
    const v27 = [v25];
    Reflect.apply(o24.m, v17, v27);
}
