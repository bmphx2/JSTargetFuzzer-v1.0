let v2 = 409683548n;
v2 *= -(-9223372036854775808n);
new Int32Array(3507);
new Int8Array(8);
new Float64Array(748);
const v14 = new Uint16Array(13);
new Int32Array(214);
new Float64Array(2852);
function f22(a23) {
    const o24 = {
        "a": "setBigInt64",
    };
    return o24;
}
const v25 = f22("setBigInt64");
const o31 = {
    ...Int32Array,
    toString(a27, a28, a29, a30) {
        v14[this] **= 13;
        return a27;
    },
    "get": f22,
    "set": f22,
};
const v33 = new Proxy(v25, o31);
v33.a *= -1000000000000.0;
