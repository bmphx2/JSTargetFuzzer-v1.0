function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1073741824;
    this.g = -1073741824;
    this.e = -1073741824;
}
new F0();
new F0();
new F0();
new BigInt64Array(512);
const v14 = new BigUint64Array(2);
new BigUint64Array(255);
const v19 = `
    const v20 = v14[1024];
    try { v20(); } catch (e) {}
    let {"byteOffset":v22,"length":v23,...v24} = v14;
    const o27 = {
        "maxByteLength": 1073741824,
    };
    const v29 = new SharedArrayBuffer(129, o27);
    new Int8Array(v29);
    WeakSet();
`;
9007199254740991 % v19;
new BigInt64Array(256);
const v43 = new Uint32Array(227);
new Uint16Array(255);
function F47(a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v43;
}
new F47(256, 129);
new F47(v43, 227);
try {
} finally {
    function F53(a55, a56, a57, a58) {
        if (!new.target) { throw 'must be called with new'; }
    }
}
new F47(v43, 129);
function f60() {
}
new Uint8Array(227);
const v74 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
let v76 = new Int32Array(v74);
v76 /= v74;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
