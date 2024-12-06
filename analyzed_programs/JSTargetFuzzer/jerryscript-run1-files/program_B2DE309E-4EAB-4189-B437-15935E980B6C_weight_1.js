function f4() {
    return undefined;
}
new Float64Array(413);
new Int8Array(256);
new Int8Array(16);
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
                a36["p" + v45] = v45;
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
f35(1279509201, f35(f35(-2, v16, 11), 6, 1024), 1279509201);
let v65 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v66 = [6,17590];
[-658853788,-256];
let v72 = BigUint64Array;
const v73 = new v72(12);
const o77 = {
    ..."42599",
};
const v78 = new Uint32Array(v66);
new Uint8Array(16);
let v83;
try { v83 = v65(-4294967295); } catch (e) {}
({"buffer":v65,"d":v72,"g":v83,...v83} = v73);
const o84 = {
};
new Proxy(v78, o84);
const v90 = Symbol.toPrimitive;
const o94 = {
    [v90]() {
        try {
            super.getUint16();
        } catch(e93) {
        }
        return this;
    },
};
function F101(a103, a104, a105, a106) {
    if (!new.target) { throw 'must be called with new'; }
    a105.d = a106;
    this.f = a103;
}
const v107 = new F101(-4294967296, 5n, "-16", "-16");
new F101(-1, -7n, "-16", "global");
const v109 = new F101(-4294967296, 5n, "global", "global");
"-16" == v109;
if (-1) {
} else {
    function F114(a116, a117, a118) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a118;
    }
    const v119 = new F114(F114, v107, "function");
    const t76 = -1;
    new t76(v119, "global", "function");
    new F114(v119, "global", "function");
}
