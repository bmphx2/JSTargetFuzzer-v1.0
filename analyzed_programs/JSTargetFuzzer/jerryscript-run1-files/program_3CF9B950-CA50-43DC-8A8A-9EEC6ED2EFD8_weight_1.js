function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0 in this;
    this[F0];
    F0 % -1073741824;
    +3 - -2.0;
    Math.log1p(-1073741824);
    this.a = 3;
    this.b = 3;
}
const v12 = new F0();
const v13 = new F0(v12);
new F0();
const v15 = [0,-1024,-469151175,1321684837,508090931,4096,-1073741824];
const v16 = [-6,-1468901565,-128491065];
const v17 = [-5,-12,-1612166749,5,1073741824,257,64,4];
function f18(a19, a20) {
    const o27 = {
        "g": F0,
        "matchAll": a20,
        n(a22, a23, a24, a25) {
            a22 < a20;
            v15[a24] = v16;
            return a23;
        },
        ...a19,
        "h": a20,
        [F0]: v17,
        "b": v16,
        [v16]: a19,
    };
    return o27;
}
f18(v17, v13);
f18(v15, v13);
f18(v15, v13);
new WeakMap();
const v34 = new WeakSet();
RegExp["apply"](v34, ("1073741824").match(([2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308]).copyWithin(v34, v34, WeakSet)));
