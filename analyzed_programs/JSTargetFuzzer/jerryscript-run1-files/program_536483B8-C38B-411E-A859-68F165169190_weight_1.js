function f0() {
}
function f7(a8, a9, a10) {
    const v12 = [943620025];
    const v13 = [-4294967295];
    const o17 = {
        valueOf() {
            this.d >>>= -1;
            return v12;
        },
    };
    Object.defineProperty(v13, "b", { enumerable: true, value: 14 });
    v12.includes(1024);
    const o25 = {
        ..."h",
        set b(a20) {
            this.b;
        },
        ...a8,
        "b": "-1024",
        ["-8703"]: "h",
        4: a9,
        "d": a10,
        __proto__: "-8703",
        ..."-1024",
        [a8]: f0,
    };
    return o25;
}
f7("-1024", -19755n, -2147483647n);
f7("h", -19755n, -19755n);
f7("-8703", 15n, -2147483647n);
[3,-65535];
[-9223372036854775808,257];
const v31 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
let v37 = -710993352;
const v42 = new Int32Array(3004);
const v45 = new Uint32Array(1);
const v48 = new Float64Array(8);
function f50(a51, a52, a53) {
    const o76 = {
        "d": v37,
        "h": v31,
        [a52](a55, a56) {
            const v57 = v45[a55];
            try { v42.every(v57, a56); } catch (e) {}
            try { v31.flat(3004); } catch (e) {}
            for (let v60 = 0; v60 < 32; v60++) {
                a51["p" + v60] = v60;
            }
            a51 && 1000000000.0;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0, 1000000000.0);
            return Number + Number;
        },
    };
    return o76;
}
f50(1279509201, f50(f50(-2, v31, 11), 6, 1024), 1279509201);
let v80 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v81 = [6,17590];
[-658853788,-256];
let v87 = BigUint64Array;
const v88 = new v87(12);
const v91 = new Uint32Array(v81);
new Uint8Array(16);
let v96;
try { v96 = v48(-4294967295); } catch (e) {}
({"buffer":v80,"d":v87,"g":v37,...v96} = v88);
const o97 = {
};
new Proxy(v91, o97);
const v103 = Symbol.toPrimitive;
const o107 = {
    [v103]() {
        try {
            super.getUint16();
        } catch(e106) {
        }
        return this;
    },
};
function F114(a116, a117, a118, a119) {
    if (!new.target) { throw 'must be called with new'; }
    a118.d = a119;
    this.f = a116;
}
const v120 = new F114(-4294967296, 5n, "-16", "-16");
new F114(-1, -7n, "-16", "-16");
const v122 = new F114(-4294967296, 5n, "global", "global");
"-16" == v122;
if (-1) {
} else {
    function F127(a129, a130, a131) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a131;
    }
    const v132 = new v87(F127, v120, "function");
    const t99 = -1;
    new t99(v132, "global", "function");
    new F127(v132, "global", "function");
}
