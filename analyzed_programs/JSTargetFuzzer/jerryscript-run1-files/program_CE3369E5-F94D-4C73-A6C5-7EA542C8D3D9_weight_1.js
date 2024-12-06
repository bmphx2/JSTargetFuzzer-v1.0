new Uint32Array(9);
function f7() {
    return f7;
}
function F8() {
    if (!new.target) { throw 'must be called with new'; }
}
class C10 extends F8 {
}
const v11 = new C10();
const v12 = [F8,F8,F8,F8];
const v13 = [v11,v11];
const v14 = v13[536870912];
let v15;
try { v15 = v14(); } catch (e) {}
const v17 = new Uint8Array(v13, v14, v15);
v17[v12];
new Int32Array(1);
new Float64Array(64);
let v24 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v25 = [6,17590];
[-658853788,-256];
let v31 = BigUint64Array;
const v32 = new v31(12);
const v35 = new Uint32Array(v25);
new Uint8Array(16);
let v40;
try { v40 = v24(-4294967295); } catch (e) {}
({"buffer":v24,"d":v31,"g":v40,...v40} = v32);
const o41 = {
};
new Proxy(v35, o41);
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
    const t58 = -1;
    new t58(v76, "global", "function");
    new F71(v76, "global", "function");
}
