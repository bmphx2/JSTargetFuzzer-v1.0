new WeakMap();
new BigInt64Array(1024);
new BigInt64Array(935);
new Int32Array(935);
function f12(a13, a14, a15, a16) {
    const o19 = {
        set g(a18) {
        },
        ...a14,
    };
    return o19;
}
const v20 = f12();
f12(2, v20);
v20.g **= f12;
