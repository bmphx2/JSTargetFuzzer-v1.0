function f0() {
}
function f1() {
    return f0;
}
const v2 = [f0,f0,f1,f1];
[[f0],v2,f0,v2,f1];
const v5 = [];
const o6 = {
};
const v8 = new Proxy(v5, o6);
try {
    new v8();
} catch(e10) {
} finally {
}
new Uint8Array(2);
new BigUint64Array(2245);
new Uint32Array(1024);
Math.imul(Math);
Float32Array.toLocaleString();
