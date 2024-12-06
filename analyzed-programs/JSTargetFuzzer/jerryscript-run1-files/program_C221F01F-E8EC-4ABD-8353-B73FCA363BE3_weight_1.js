function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
let v6 = RegExp.bind(RegExp, F2, RegExp);
const v8 = new Int32Array();
v6.__proto__ = v4;
v6 /= v8;
const v10 = [6.347713532236225e+307];
const v11 = [1.7976931348623157e+308,2.503330828647581,-1.0,-260.0546746551993,2.2250738585072014e-308];
const v12 = [-640941.4558098705,1000.0,-357.0060746056305,1.5821415890456964e+307];
function f13(a14, a15, a16) {
    const o26 = {
        "c": a16,
        "e": a14,
        4037: a16,
        "b": a14,
        [a14](a18, a19, a20, a21) {
            a20[6];
            a20.__proto__;
            try {
                super.endsWith(a21, a15, 5n);
            } catch(e25) {
            }
            return a15;
        },
    };
    return o26;
}
f13(v10, f13(v12, f13(v12, v11, v10), v11), v12);
function f33(a34, a35) {
}
([8,536870912])["find"](f33);
