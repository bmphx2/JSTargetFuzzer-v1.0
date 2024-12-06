function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
with (v3) {
    c.__proto__ = v5;
}
v4.__proto__ = v5;
const v15 = new Int32Array(7);
new Float32Array(13);
const v21 = new BigInt64Array(255);
const v23 = +512;
[255,13,Int32Array];
const v25 = [7,-2147483648n];
v3 * [512,13];
const v33 = new Int32Array(7, 13);
const o34 = {
    "a": v15,
    "c": v23,
    "e": F0,
    ...Float32Array,
    1073741824: 128n,
    "g": 631898.3897543075,
    "d": v21,
    "c": 4294967296n,
    "b": -216427537,
    [30972]: 15,
    4096: v33,
    "h": F0,
    ...v25,
    ...v3,
};
