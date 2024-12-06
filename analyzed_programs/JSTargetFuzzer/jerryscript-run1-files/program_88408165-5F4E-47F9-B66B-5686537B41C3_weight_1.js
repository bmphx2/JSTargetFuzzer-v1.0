function f0() {
    const v2 = new Date();
    v2.setUTCMilliseconds();
}
[f0,f0,[2,-14],2,41187];
[-14,f0];
new Int32Array(1);
new BigUint64Array(3);
new Int32Array(255);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9;
}
const v22 = new F19();
const o24 = {
    ...v22,
    get b() {
        return this;
    },
};
