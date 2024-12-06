function f1() {
    const o5 = {
        valueOf() {
            let v2 = this;
            v2 >>>= v2;
            let [,v3,v4] = v2;
            v3[65536] = v2;
            v3[v4] = v2;
            return undefined;
        },
        __proto__: undefined,
        "g": undefined,
        65535: undefined,
    };
    return o5;
}
const v6 = f1();
const v7 = f1();
const v8 = f1();
class C9 {
    static [v8] = v7;
    n(a11) {
        f1();
        const o13 = {
            "apply": f1,
            "call": f1,
            "get": f1,
            "isExtensible": f1,
            "preventExtensions": f1,
            "set": f1,
        };
        new Proxy(a11, o13);
        return v6;
    }
}
new C9();
const v17 = new C9();
new C9();
[v7,[[v8],f1,C9],v17,v8];
let v22 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v23 = [6,17590];
[-658853788,-256];
let v29 = BigUint64Array;
const v30 = new v29(12);
const v32 = [];
const v34 = new Int16Array();
function f35(a36, a37) {
    const v38 = v34[-1];
    Object.defineProperty(v38, v32, { writable: true, value: v38 });
    return Int16Array;
}
new Promise(f35);
const v42 = new Uint32Array(v23);
new Uint8Array(16);
let v47;
try { v47 = v22(-4294967295); } catch (e) {}
({"buffer":v22,"d":v29,"g":v47,...v47} = v30);
const o48 = {
};
new Proxy(v42, o48);
const v54 = Symbol.toPrimitive;
const o61 = {
    [v54]() {
        try {
            const v56 = [1000000.0,1.2694373884119616e+308,-Infinity,0.7652992022490531,5.0,-8.644737118571141,1000000.0,0.9075298547528431,-2.220446049250313e-16];
            v56.length <<= -62483;
            v56.reverse();
            super.getUint16();
        } catch(e60) {
        }
        return this;
    },
};
function F68(a70, a71, a72, a73) {
    if (!new.target) { throw 'must be called with new'; }
    a72.d = a73;
    this.f = a70;
}
const v74 = new F68(-4294967296, 5n, "-16", "-16");
new F68(-1, -7n, "-16", "global");
const v76 = new F68(-4294967296, 5n, "global", "global");
"-16" == v76;
if (-1) {
} else {
    function F81(a83, a84, a85) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a85;
    }
    const v86 = new F81(F81, v74, "function");
    const t89 = -1;
    new t89(v86, "global", "function");
    new F81(v86, "global", "function");
}
