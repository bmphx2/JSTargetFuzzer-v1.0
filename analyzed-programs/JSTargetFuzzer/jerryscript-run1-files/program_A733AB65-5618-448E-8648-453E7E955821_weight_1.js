function f0() {
}
const v3 = new Int16Array(0);
const v6 = new BigUint64Array(6);
const v9 = new Uint16Array(2399);
function f10(a11, a12, a13, a14) {
    const o26 = {
        ...v9,
        replaceAll(a16, a17, a18) {
            function F19(a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a13;
            }
            new F19(a13, a18);
            new F19(0, a12);
            new F19(a14, a17);
            return a13;
        },
        "__proto__": a14,
        "f": v3,
        "d": a11,
        "b": v9,
    };
    return o26;
}
const v27 = f10(6, 6, 2399, 6);
f10(2399, 6, 2399, 6);
const v30 = Symbol.toStringTag;
v3[v30] = v30;
const v31 = v6[BigUint64Array];
f10(0, 0, 6, 6);
const v37 = new Uint8Array();
v37.includes();
v27 >> v31;
typeof 268435439n === "bigint";
