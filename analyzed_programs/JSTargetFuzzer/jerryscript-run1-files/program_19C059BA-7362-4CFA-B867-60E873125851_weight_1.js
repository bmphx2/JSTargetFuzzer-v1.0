const t0 = -10265;
delete t0[1702757252];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
    this.b = 1702757252;
    this.e = a7;
}
new F4(-10265, 1702757252);
const v9 = new F4(8, -10265);
new F4(-10265, 1702757252);
for (let i14 = 0; i14 < 6; i14++) {
    const v20 = new F4(1702757252, i14);
    delete v9[v20];
}
try {
    try { F4(16, -2147483648); } catch (e) {}
} finally {
    const o26 = {
    };
    new Proxy(v9, o26);
}
new Int16Array(16);
new BigUint64Array(3);
new Float32Array(127);
const v37 = new Date();
v37.getUTCMinutes();
