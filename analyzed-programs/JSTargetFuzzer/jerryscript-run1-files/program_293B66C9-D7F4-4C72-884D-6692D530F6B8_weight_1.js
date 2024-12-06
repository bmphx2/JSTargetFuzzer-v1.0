new Set();
new Uint16Array(454);
new Uint32Array(4);
new Uint8ClampedArray(7);
[3,-65535];
[-9223372036854775808,257];
const v16 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v27 = new Int32Array(3004);
const v30 = new Uint32Array(1);
new Float64Array(8);
function f35(a36, a37, a38) {
    const o61 = {
        "d": 11,
        "h": v16,
        [a37](a40, a41) {
            const v42 = v30[a40];
            try { v27.every(v42, a36); } catch (e) {}
            try { v16.flat(3004); } catch (e) {}
            for (let v45 = 0; v45 < 32; v45++) {
                "p" + v45;
                a36[a40] = v45;
            }
            Number && 1000000000.0;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0, 1000000000.0);
            Number + Number;
            return a36;
        },
    };
    return o61;
}
f35(-2, v16, 11);
f35(1279509201, f35(1279509201, 6, 1024), 1279509201);
let v65 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v66 = [6,17590];
[-658853788,-256];
let v72 = BigUint64Array;
const v73 = new v72(12);
const v76 = new Uint32Array(v66);
new Uint8Array(16);
let v81;
try { v81 = v65(-4294967295); } catch (e) {}
({"buffer":v65,"d":v72,"g":v81,...v81} = v73);
const o82 = {
};
new Proxy(v76, o82);
const v88 = Symbol.toPrimitive;
const o92 = {
    [v88]() {
        try {
            super.getUint16();
        } catch(e91) {
        }
        return this;
    },
};
function F99(a101, a102, a103, a104) {
    if (!new.target) { throw 'must be called with new'; }
    a103.d = a104;
    this.f = a101;
}
const v105 = new F99(-4294967296, 5n, "-16", "-16");
new F99(-1, -7n, "-16", "global");
const v107 = new F99(-4294967296, 5n, "global", "global");
"-16" == v107;
if (-1) {
} else {
    function F112(a114, a115, a116) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a116;
    }
    const v117 = new F112(F112, v105, "function");
    const t73 = -1;
    new t73(v117, "global", "function");
    new F112(v117, "global", "function");
}
