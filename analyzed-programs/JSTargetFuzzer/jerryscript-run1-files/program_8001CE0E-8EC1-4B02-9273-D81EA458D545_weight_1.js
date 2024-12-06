new Int32Array(2999);
const v8 = [-1604425008,2147483649,16];
v8[65535n] = -2.0;
v8.slice();
new Uint32Array(10);
let v13 = 1110;
const v15 = new Int16Array(v13);
function f16() {
    return f16;
}
const o17 = {
    "apply": f16,
    "call": f16,
    "construct": f16,
    "defineProperty": f16,
    "deleteProperty": f16,
    "get": f16,
    "has": f16,
    "preventExtensions": f16,
    [v13]: Int16Array,
    "h": v15,
    9: -1024n,
    "e": Uint32Array,
    "f": 10,
};
new Proxy(v8, o17);
class C20 extends f16 {
}
const v21 = `
    const v23 = +v13;
    function f24(a25, a26, a27, a28) {
        const o29 = {
            "d": 1n,
        };
        return o29;
    }
    f24(v23, f24(v13, f24, -65537, v23), 10, 2999);
    f24(-65537, -65537, v23, 2999);
    v13++;
`;
eval(v21);
