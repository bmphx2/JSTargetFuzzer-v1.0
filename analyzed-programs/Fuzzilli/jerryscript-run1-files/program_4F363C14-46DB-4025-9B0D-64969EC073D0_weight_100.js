const v5 = new Int16Array(129);
const v8 = new Uint16Array(8);
const v11 = new Uint8Array(5);
const v12 = new Uint16Array(v5, 5, 5);
function f13() {
    return 5;
}
v12[v11] = 129;
v8.byteOffset;
Object.defineProperty(v8, 5, { writable: true, set: f13 });
throw v11;
const o15 = {
    "call": f13,
    "has": f13,
    "isExtensible": f13,
    "ownKeys": f13,
};
new Proxy(v8, o15);
