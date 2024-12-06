function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1501534664;
}
new F0();
new F0();
new F0();
new Int32Array(7);
new Float32Array(13);
const v20 = new BigInt64Array(255);
const v27 = new Int32Array(30972, 13);
const o28 = {
    "a": v27,
    "d": v20,
    "c": 128n,
    "b": -216427537,
};
