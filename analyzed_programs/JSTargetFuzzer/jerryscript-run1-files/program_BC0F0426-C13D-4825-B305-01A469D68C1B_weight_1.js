[4,1521559019];
const v4 = [-9007199254740992,-4096,-28335,-65536,16,65535];
const v5 = [13,2147483648];
new Uint16Array(16);
new Float64Array(3);
const v14 = new Int8Array(5);
const v15 = (a16, a17, a18, a19) => {
    try { a16(v14, 3, v5, 16); } catch (e) {}
    throw a18;
    for (let v21 = 0; v21 < 32; v21++) {
        a18["p" + v21] = v21;
    }
    function F24(a26, a27, a28) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a18;
    }
    const v30 = Symbol.toPrimitive;
    a17[v30] = v30;
    const o31 = {
        "call": v15,
        "construct": v15,
        "deleteProperty": v15,
        "getOwnPropertyDescriptor": v15,
        "has": v15,
        "ownKeys": v15,
    };
    new Proxy(v5, v30);
    return v15;
};
async function f34(a35, a36, a37, a38) {
    const v41 = new Promise(2);
    return v41;
}
f34(f34, f34, f34, f34);
function f43(a44, a45) {
    v14[v15(a45, a44, v4, -16)] >>>= a45;
}
new Promise(f43);
