function f0() {
    let v3 = 1073741824;
    const o9 = {
        "a": v3,
        [v3](a5) {
            let v4 = this;
            v3 <<= v3;
            v4 ^= v4;
            [v4,[584385.8377083219,584385.8377083219,v4,v4,584385.8377083219]];
            [584385.8377083219];
            return v3;
        },
        "d": 584385.8377083219,
        [v3]: v3,
        "f": v3,
        [584385.8377083219]: v3,
        __proto__: "F",
    };
    return f0;
}
const v10 = f0();
const v11 = f0();
f0();
[f0,v11,[f0,[v10,v11,v10],f0]];
let v23 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v24 = [6,17590];
[-658853788,-256];
let v30 = BigUint64Array;
const v31 = new v30(12);
const v34 = new Uint32Array(v24);
new Uint8Array(16);
let v39;
try { v39 = v23(-4294967295); } catch (e) {}
({"buffer":v23,"d":v30,"g":v39,...v39} = v31);
const o40 = {
};
new Proxy(v34, o40);
const v46 = Symbol.toPrimitive;
try { Float32Array(); } catch (e) {}
const o52 = {
    [v46]() {
        try {
            super.getUint16();
        } catch(e51) {
        }
        return -7n;
    },
};
function F59(a61, a62, a63, a64) {
    if (!new.target) { throw 'must be called with new'; }
    a63.d = a64;
    this.f = a61;
}
const v65 = new F59(-4294967296, 5n, "-16", "-16");
new F59(-1, -7n, "-16", "global");
const v67 = new F59(-4294967296, 5n, "global", "global");
"-16" == v67;
if (-1) {
} else {
    function F72(a74, a75, a76) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a76;
    }
    const v77 = new F72(F72, v65, "function");
    const t64 = -1;
    new t64(v77, "global", "function");
    new F72(v77, "global", "function");
}
