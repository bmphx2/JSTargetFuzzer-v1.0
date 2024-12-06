function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v6 = new F3(9007199254740992);
const v7 = new F3(1);
const v8 = [9007199254740992,2986,-2132228841,-2];
function f9(a10, a11, a12) {
    const v14 = arguments.callee;
    let v15;
    try { v15 = v14.call(v8); } catch (e) {}
    return v15;
}
f9();
const v17 = new F3(9007199254740992);
const v20 = new BigInt64Array(1);
const v21 = v20.sort();
new Uint8Array();
function f24(a25, a26) {
    const o40 = {
        ...v7,
        __proto__: v6,
        "a": v17,
        o(a28, a29, a30, a31) {
            super.h = a28;
            let v32;
            try { v32 = a26(a28, this); } catch (e) {}
            for (const v34 in v8) {
                super.b = "n";
                a26 << v20;
            }
            let v39;
            try { v39 = v32["n"](this, 1073741824, 9007199254740992, a25); } catch (e) {}
            return v39;
        },
        "c": a26,
        ...v7,
        "b": a25,
        "f": 1073741824,
    };
    return o40;
}
const v41 = f24(1073741824, 1);
const v42 = f24(9007199254740992, f24);
const v43 = f24(1, v42);
function f44(a45, a46, a47, a48) {
    const o67 = {
        "d": v41,
        "b": v7,
        o(a50, a51) {
            for (let i54 = 0, i55 = 10; i54 < i55; i54++, i55--) {
                i54 * a51;
                typeof 1073741824 === "function";
            }
            return 1073741824;
        },
        ...a46,
        2264758864: v21,
        __proto__: v8,
        "g": 9007199254740992,
        [a46]: a46,
    };
    return o67;
}
f44(9007199254740992, v42, v43, v6);
const v70 = f44(1, v42, f44(1073741824, v41, v41, v6), v43);
const v71 = [-2.0,8.942667862857025,5.0];
const v72 = [173.76252625163602,0.965365470512233,-3.0,-2.0,0.0,558.8178442237372,5.039557620220005,-0.0];
v17[10000] /= 1;
v71.__proto__;
v41["o"](v70, 1, v72);
v71.length;
const o78 = {
};
o78 + 7;
v71["fill"](..."fill", o78);
