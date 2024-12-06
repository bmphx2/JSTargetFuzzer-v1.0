const v1 = new resourceName();
const v2 = [v1,v1];
const v3 = [v2,resourceName,resourceName,v2,v2];
let v4 = [v2,resourceName,v2,v3,resourceName];
for (let i7 = 0, i8 = 10; i7 < i8; i7++, i8--) {
    v4 <<= v1;
    resourceName();
}
const v19 = new Array(933);
v19.length -= v4;
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a23;
    this.g = a23;
}
const v25 = new F21(v3, v2);
const v26 = new F21(v4, v1);
new F21(v3, v4);
v19[1] = v26;
v25[7] = v2;
Object.defineProperty(Array, F21, { writable: true, enumerable: true, value: v1 });
new Array(v4);
new Float32Array(64);
new Int32Array(257);
new BigInt64Array(38);
const v41 = (a42, a43, a44, a45) => {
    a44 > 127;
    return a44;
};
