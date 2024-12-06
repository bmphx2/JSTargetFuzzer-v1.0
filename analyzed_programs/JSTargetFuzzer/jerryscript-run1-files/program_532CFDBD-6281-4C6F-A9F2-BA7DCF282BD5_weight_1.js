const v0 = [689.1898352938995,6.407974048360341,1000000000000.0,-728620.3988092175,0.11027773312849576,-167.528377315527,-1.7976931348623157e+308,-3.9845307740089293];
const v1 = [-2.220446049250313e-16,1.660119671458684,-5.0,4.4763604991940146e+307,0.5770633040717777,5.5484640176643545,-5.0,761735.8033054264];
const v2 = [2.0];
function f3() {
    return v2;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
}
const v7 = new F4(v2);
const v8 = new F4(v2);
const v9 = new F4(v7);
function f10(a11, a12) {
    const o13 = {
        __proto__: a11,
        "unscopables": v2,
        [v0]: v8,
        "a": v0,
        "f": v9,
        2147483648: a12,
        "d": v8,
        ...v8,
        ...v8,
        "c": v1,
        "d": a12,
        "e": v9,
        ...v0,
    };
    return o13;
}
const v14 = f10(v9, v0);
const v15 = f10(v7, v1);
const v16 = f10(v8, v2);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v14;
}
new F17(v14, v14, v2, v16);
new F17(F4, v7, v0, v14);
new F17(f10, v15, v1, v16);
function f26(a27, a28, a29) {
    'use strict';
    let v30 = !a29;
    --v30;
    return a27;
}
f26(f26, f26, f26);
