function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.g = a9;
}
new F6("2147483649", -13, 4294967296);
new F6("m", -13, 4294967296);
new F6("m", -13, 2147483647);
new Uint8Array(129);
new Uint16Array(255);
new Int8Array(107);
const v28 = new Array(9);
const v31 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const o43 = {
    get c() {
        let v40 = -44662;
        const v41 = --v40;
        Math.min(v41);
        return v41;
    },
};
const o44 = {
    ...o43,
};
const v48 = `
    Uint32Array >= Uint32Array;
    let v50;
    try { v50 = v31.join(v48); } catch (e) {}
    v28[v50];
`;
eval(v48);
