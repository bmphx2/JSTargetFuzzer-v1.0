function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
}
const v6 = new F3("m");
new F3("m");
const v8 = new F3("X");
const v9 = [-1000000.0,535179.2230165782,-2.2250738585072014e-308,-730.4166423777232,-0.0,1000000.0];
const v10 = [4.667828382270212,0.09427404848355692];
const v11 = [-1000000000.0,-1.199304579756457e+308,NaN];
function f12(a13, a14, a15) {
    const o22 = {
        __proto__: v6,
        valueOf(a17, a18) {
            const o19 = {
            };
            new Proxy(a17, o19);
            return "m";
        },
        "g": v11,
        "f": v10,
        "e": v11,
        "c": v10,
        6: a15,
    };
    return o22;
}
f12(v8, v10, "m");
f12(v6, v10, "function");
f12(f12, v9, "X");
let v37 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v38 = [6,17590];
[-658853788,-256];
let v44 = BigUint64Array;
const v45 = new v44(12);
const v48 = new Uint32Array(v38);
new Uint8Array(16);
let v53;
try { v53 = v37(-4294967295); } catch (e) {}
({"buffer":v37,"d":v44,"g":v53,...v53} = v45);
const o54 = {
};
new Proxy(v48, o54);
const v60 = Symbol.toPrimitive;
const o64 = {
    [v60]() {
        try {
            super.getUint16();
        } catch(e63) {
        }
        return this;
    },
};
function F71(a73, a74, a75, a76) {
    if (!new.target) { throw 'must be called with new'; }
    a75.d = a76;
    this.f = a73;
}
const v77 = new F71(-4294967296, 5n, "-16", "-16");
new F71(-1, -7n, "-16", "global");
const v79 = new F71(-4294967296, 5n, "global", "global");
"-16" == v79;
if (-1) {
} else {
    function F84(a86, a87, a88) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a88;
    }
    const v89 = new F84(F84, v77, "function");
    const t69 = -1;
    new t69(v89, "global", "function");
    new F84(v89, "global", "function");
}
("multiline")["x"];
const v98 = Symbol.species;
const t75 = "x";
t75[v98] = 536870887n;
const t77 = 1000n;
t77[9] = 255;
let v99;
try { v99 = v98.toString(255, "x", 1073741824n); } catch (e) {}
v99 = v98;
