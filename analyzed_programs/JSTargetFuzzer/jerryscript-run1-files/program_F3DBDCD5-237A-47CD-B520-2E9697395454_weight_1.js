let v2 = 409683548n;
v2 *= -(-9223372036854775808n);
new Int32Array(3507);
new Int8Array(8);
new Float64Array(748);
const v14 = new Uint16Array(13);
new Int32Array(214);
new Float64Array(2852);
new Date([1073741823,-9007199254740992,64,-65535]);
function f25(a26) {
    const o27 = {
        "a": "setBigInt64",
    };
    return o27;
}
const v28 = f25("setBigInt64");
const o34 = {
    ...Int32Array,
    toString(a30, a31, a32, a33) {
        v14[this] **= 13;
        return a30;
    },
    "get": f25,
    "set": f25,
};
const v36 = new Proxy(v28, o34);
v36.a *= -1000000000000.0;
