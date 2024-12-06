new BigUint64Array(959);
const v8 = new Int32Array(1000);
new Uint8ClampedArray(255);
let v12 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v13 = [6,17590];
[-658853788,-256];
let v19 = BigUint64Array;
const v20 = new v19(12);
const v23 = new Uint32Array(v13);
new Uint8Array(16);
let v28;
try { v28 = v12(-4294967295); } catch (e) {}
({"buffer":v12,"d":v19,"g":v28,...v28} = v20);
const o29 = {
};
const v31 = new Proxy(v23, o29);
const v34 = new Int16Array();
v34.fill(v8, v34, Int16Array);
typeof 8n;
const o44 = {
    get a() {
        function F38(a40, a41) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const t24 = F38(F38, v34);
        t24(v34);
        return F38;
    },
};
const v47 = Symbol.toPrimitive;
const o51 = {
    [v47]() {
        try {
            super.getUint16();
        } catch(e50) {
        }
        return this;
    },
};
function F58(a60, a61, a62, a63) {
    if (!new.target) { throw 'must be called with new'; }
    a62.d = a63;
    this.f = a60;
}
const v64 = new F58(-4294967296, 5n, "-16", "-16");
new F58(-1, -7n, "-16", "global");
const v66 = new F58(-4294967296, 5n, "global", "global");
"-16" == v66;
if (-1) {
} else {
    function F71(a73, a74, a75) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a75;
    }
    const v76 = new F71(F71, v64, "function");
    const t55 = -1;
    const v77 = new t55(v76, "global", "function");
    v77[F71];
    const v79 = v8 ^ F71;
    Object.defineProperty(v8, "buffer", { writable: true, get: Symbol, set: Symbol });
    function F80(a82, a83, a84) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = Uint8Array;
    }
    const v85 = new F80(v47, "function", v79);
    new F80(v85, v12, 255);
    new F80(v31, v77, 255);
    new F71(v76, "global", "function");
}
