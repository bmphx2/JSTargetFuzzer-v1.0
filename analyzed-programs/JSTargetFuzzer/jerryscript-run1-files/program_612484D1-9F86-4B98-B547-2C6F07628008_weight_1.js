new Set();
function f8() {
    return 1893273615;
}
new Date();
new Float64Array(3727);
new Uint16Array(2);
new BigUint64Array(13);
[3,-65535];
[-9223372036854775808,257];
const v25 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v36 = new Int32Array(3004);
const v39 = new Uint32Array(1);
new Float64Array(8);
function f44(a45, a46, a47) {
    const o70 = {
        "d": 11,
        "h": v25,
        [a46](a49, a50) {
            const v51 = v39[a49];
            try { v36.every(v51, a45); } catch (e) {}
            try { v25.flat(3004); } catch (e) {}
            for (let v54 = 0; v54 < 32; v54++) {
                a45["p" + v54] = v54;
            }
            Number && a47;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0, 1000000000.0);
            Number + Number;
            return a45;
        },
    };
    return o70;
}
f44(1279509201, f44(f44(-2, v25, 11), 6, 1024), 1279509201);
let v74 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v75 = [6,17590];
[-658853788,-256];
let v81 = BigUint64Array;
const v82 = new v81(12);
const v85 = new Uint32Array(v75);
new Uint8Array(16);
let v90;
try { v90 = v74(-4294967295); } catch (e) {}
({"buffer":v74,"d":v81,"g":v90,...v90} = v82);
const o91 = {
};
new Proxy(v85, o91);
const v97 = Symbol.toPrimitive;
const o101 = {
    [v97]() {
        try {
            super.getUint16();
        } catch(e100) {
        }
        return this;
    },
};
function F108(a110, a111, a112, a113) {
    if (!new.target) { throw 'must be called with new'; }
    a112.d = a113;
    this.f = a110;
}
const v114 = new F108(-4294967296, 5n, "-16", "-16");
new F108(-1, -7n, "-16", "global");
const v116 = new F108(-4294967296, 5n, "global", "global");
"-16" == v116;
if (-1) {
} else {
    function F121(a123, a124, a125) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a125;
    }
    const v126 = new F121(F121, v114, "function");
    const t75 = -1;
    new t75(v126, "global", "function");
    new F121(v126, "global", v82);
}
