function f4(a5) {
    const o15 = {
        [1073741824](a7, a8) {
            for (let v9 = 0; v9 < 32; v9++) {
                this["p" + v9] = v9;
            }
            for (let v12 = 0; v12 < 32; v12++) {
                this["p" + v12] = v12;
            }
            return undefined;
        },
        536870889: 1073741824,
        ...a5,
    };
    return o15;
}
const v16 = f4(536870912);
const v17 = f4(1073741824);
const v18 = f4(536870912);
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    v16.c = v16;
    this.h = a23;
    this.g = a23;
}
new F19(v18, 536870912, v18, v18);
const v26 = new F19(v18, 1073741824, v18, v18);
new F19(v18, 1073741824, v16, v16);
function f28() {
    return v18;
}
[1073741824,1073741824,536870912];
const v30 = [F19,f4,1073741824,v17];
[v30,v30];
let v32 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v33 = [6,17590];
[-658853788,-256];
let v39 = BigUint64Array;
const v40 = new v39(12);
const v43 = new Uint32Array(v33);
new Uint8Array(16);
let v48;
try { v48 = v32(-4294967295); } catch (e) {}
({"buffer":v32,"d":v39,"g":v48,...v48} = v40);
const o49 = {
};
new Proxy(v43, o49);
const v55 = Promise.toPrimitive;
const o59 = {
    [v55]() {
        try {
            super.getUint16();
        } catch(e58) {
        }
        return v26;
    },
};
function F66(a68, a69, a70, a71) {
    if (!new.target) { throw 'must be called with new'; }
    a70.d = a71;
    this.f = a68;
}
const v72 = new F66(5, 5n, "-16", "-16");
new F66(-1, -7n, "-16", "global");
new F66(5, 5n, "global", "global");
"-16" == v48;
if (-1) {
} else {
    function F79(a81, a82, a83) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = a83;
    }
    const v84 = new F79(F79, v72, "function");
    const t73 = -1;
    new t73(v84, "global", "function");
    new F79(v84, "global", "function");
}
