let v13 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v14 = [6,17590];
[-658853788,-256];
let v20 = BigUint64Array;
const v21 = new v20(12);
const v24 = new Uint32Array(193);
new Uint8Array(16);
let v29;
try { v29 = v13(-4294967295); } catch (e) {}
({"buffer":v13,"d":v20,"g":v29,...v29} = v21);
const o30 = {
};
new Proxy(v24, o30);
const v36 = Symbol.toPrimitive;
const o40 = {
    [v36]() {
        try {
            super.getUint16();
        } catch(e39) {
        }
        return this;
    },
};
function F47(a49, a50, a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    a51.d = a52;
    this.f = a49;
}
new F47(-4294967296, 5n, "-16", "-16");
new F47(-1, -7n, "-16", "global");
const v55 = new F47(-4294967296, 5n, "global", "global");
"-16" == v55;
if (-1) {
} else {
    function F60(a62, a63, a64) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a64;
        try { Uint8Array(); } catch (e) {}
        let v68 = 4096;
        function f70(a71, a72, a73, a74) {
            const o84 = {
                "g": v68,
                ...a74,
                "e": a72,
                set b(a76) {
                    function F77(a79, a80) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.g = a79;
                    }
                    new F77(a74, 129);
                    new F77(a73, a73);
                    new F77(F77, 481111932);
                },
            };
            return o84;
        }
        let v85 = f70(v68, 481111932, 129, v14);
        f70(v85, v68, 481111932, v68);
        try {
            let v87;
            try { v87 = v85.isSealed(); } catch (e) {}
            v85 = v87;
            v68 = v87;
        } catch(e88) {
            e88[0] = e88;
            try { e88(v20); } catch (e) {}
        }
    }
    const v90 = new F60(F60, F60, "function");
    const t69 = -1;
    new t69(v90, "global", "function");
    new F60(v90, "global", "function");
}
