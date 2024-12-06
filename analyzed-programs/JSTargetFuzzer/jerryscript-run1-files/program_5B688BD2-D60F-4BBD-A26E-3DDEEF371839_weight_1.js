const v0 = [1.7976931348623157e+308,0.7813336146259726,3.0,-2.220446049250313e-16,1.7976931348623157e+308,1.0,2.220446049250313e-16,-1e-15,8.568510845612693];
let v1 = [0.855935699619413,-1000.0,1.4997546793260561e+308,-2.0,2.0,2.0,317287.5867213416,-4.0];
const v2 = [1000000000000.0,0.0826471342157663,-871897.4490719433,0.9175524878891073,-907088.3608336293,-1.6506636736826135,4.0];
function f3(a4, a5) {
    const o16 = {
        __proto__: v0,
        o(a7, a8, a9) {
            try {
                super.throw(a4, a5, v1);
            } catch(e11) {
            }
            return a4;
        },
        ...a4,
        set c(a13) {
            const v14 = a4 && a5;
            a4.__proto__;
            v1 = v0;
            return v14;
        },
        "g": a4,
        1073741824: a4,
        "e": v0,
        "b": v0,
    };
    return o16;
}
f3(v0, v0);
f3(v0, v2);
const v19 = f3(v1, v0);
function f23() {
    return f3;
}
function f27() {
    v2[v1] = f27;
    let v28;
    try { v28 = v1.every(f23, v1); } catch (e) {}
    v19[102651.08452138421] = v28;
    function f29() {
        return v0;
    }
}
const v32 = new Int32Array(3713);
const v35 = new Uint16Array(1024);
const v38 = new Uint8ClampedArray(5);
const v39 = [-14,-1731844252,7,-6,10,11,2147483649];
[127,268435439,8,127,-1049439289];
const v41 = [9,-65535];
v32.g = Uint16Array;
function f42(a43, a44) {
    v41["keys"](...v39, a44, ...v38, 5, ..."keys");
}
const v48 = new Promise(f42);
let v50 = v48["catch"](f27);
v50 = v35;
