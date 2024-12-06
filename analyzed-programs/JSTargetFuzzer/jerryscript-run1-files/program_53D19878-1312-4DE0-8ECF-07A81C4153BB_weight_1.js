const v0 = [-1.253708353080358e+308,3.468648497566411,9.85929683294192e+307,-1.0,-1000.0,1.7976931348623157e+308,0.0,0.1974616094171867,-Infinity,615.3946046288054];
const v1 = [-1.0,0.4773959663091113,1.4300991559173702e+308,5.425934297997039e+307];
const v2 = [-1.2568130809043195e+308,-379308.3015726346,-4.0,0.20709410403579276];
const v6 = [-4,10149];
const v7 = [2,16,-1427729563,-1,16,394542759];
const v8 = [9223372036854775807,-9007199254740990,-4096,536870888,23190,1321570863,42280,-2147483647,4294967296,16];
function f9(a10, a11, a12, a13) {
    new Uint32Array(512);
    const v19 = new Float64Array(3);
    new Float64Array(6);
    const o50 = {
        __proto__: v2,
        [a10](a24, a25, a26, a27) {
            function f28(a29, a30, a31, a32) {
                a31[v7] = a26;
                a32 = a12;
                class C33 {
                }
                const v34 = new a29();
                const v36 = new Uint8Array(v34, C33, a25);
                const o37 = {
                };
                const v39 = new Proxy(v36, this);
                const v40 = v34.__proto__;
                v39.__proto__ = v40;
                ([[v40,v40,v40,v40]])["shift"]();
                v19.__proto__ = v6;
                let v46 = v34[214];
                const v47 = ++v46;
                function f48() {
                    return v47;
                }
                return a26;
            }
            f28(a24, a26, a10, a27);
            return a26;
        },
        "a": -2147483648,
        "f": v7,
    };
    return o50;
}
const v51 = f9(v6, 536870912, -2147483648, v2);
const v52 = f9(v6, -2147483648, v1, v0);
const v53 = f9(v1, 536870912, v0, v7);
const v55 = new Date();
v55[v55];
1073741824 in v51;
function F58(a60, a61) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a61;
}
new F58(v2, v52);
new F58(v6, f9);
new F58(v8, v53);
v55.setUTCHours(v55, v55, v55);
