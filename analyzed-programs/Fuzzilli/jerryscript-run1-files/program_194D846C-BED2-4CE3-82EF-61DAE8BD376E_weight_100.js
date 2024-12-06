function f1() {
    return undefined;
}
const v4 = new Int8Array(4);
new Uint16Array(2);
new BigUint64Array(1);
const o11 = {
    "construct": f1,
    "deleteProperty": f1,
    "getOwnPropertyDescriptor": f1,
    "has": f1,
    "set": f1,
};
new Proxy(v4, o11);
const o16 = {
    "maxByteLength": 242,
};
const v18 = new SharedArrayBuffer(17, o16);
new Int16Array(v18);
