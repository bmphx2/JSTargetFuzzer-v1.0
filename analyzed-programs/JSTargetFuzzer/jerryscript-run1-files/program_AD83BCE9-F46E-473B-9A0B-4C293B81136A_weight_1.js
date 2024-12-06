function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1000;
    this.b = 1000;
    this.g = 1000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.h = v3;
    function f10(a11, a12) {
        const o16 = {
            p(a14) {
                let v13 = this;
                ~(v13 = a11);
                return v5;
            },
        };
        return o16;
    }
}
new F6(v3, v3);
new F6(v5, v4);
new F6(v5, v4);
function f20() {
    return F6;
}
const v29 = new Uint8Array(512);
new Int16Array(447);
new Uint8ClampedArray(2438);
function f39() {
}
const v41 = [2007413521,-7308,-224181456,65537,-23217,268435439,-3,5,-1024,11];
const o42 = {
    "g": v41,
};
async function* f43(a44, a45) {
    return a45;
}
v29.description <<= 2006448021;
const v52 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v52.copyWithin(v52, v52));
new Uint8Array(0);
let v63 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v65 = new TypeError(127);
v63 /= v65;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
