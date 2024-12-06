6 * 9007199254740990;
new BigInt64Array(1399);
new Uint32Array(3370);
new Uint8Array(3);
new BigUint64Array(491);
new Float32Array(890);
new Uint16Array(6);
const v25 = new Date();
const v27 = [Date,Date,Date,Date];
const v28 = v25.toUTCString;
function f30() {
    return "bigint";
}
const v31 = [];
function F32() {
    if (!new.target) { throw 'must be called with new'; }
    v31.reverse();
}
new F32();
for (const v37 of Reflect.apply(v28, v25)) {
    v37.__proto__ = v27;
}
