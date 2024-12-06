function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a6.f = a7;
    this.b = "bigint";
}
new F4("-7", "constructor");
const v9 = new F4("-7", "bigint");
new F4("constructor", "-7");
[1073741824,-331288098];
[1531445733,2147483647,257,4,-55753,16];
const v13 = [1753750694,65536,1,268435456,27432,64,3,-11,3,-57520];
[3,-65535];
const v18 = [-9223372036854775808,257];
const v19 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v30 = new Int32Array(3004);
const v33 = new Uint32Array(1);
const v36 = new Float64Array(8);
function f38(a39, a40, a41) {
    const o64 = {
        "d": 11,
        "h": 8,
        [a40](a43, a44) {
            const v45 = v33[a43];
            try { v30.every(v45, a39); } catch (e) {}
            try { v19.flat(3004); } catch (e) {}
            for (let v48 = 0; v48 < 32; v48++) {
                "p" + v48;
                a39[v9] = v48;
            }
            Number && 1000000000.0;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0, 1000000000.0);
            return Number + Number;
        },
    };
    return o64;
}
f38(1279509201, f38(f38(-2, v19, 11), 6, 1024), 1279509201);
let v68 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v69 = [6,17590];
const v70 = [-658853788,-256];
let v75 = BigUint64Array;
const v76 = new v75(12);
const v79 = new Uint32Array(v69);
new Uint8Array(16);
let v84;
try { v84 = v68(-4294967295); } catch (e) {}
({"buffer":v68,"d":v75,"g":v84,...v84} = v76);
const o93 = {
    get c() {
        try { new v75(v69, this, v18, v13, this); } catch (e) {}
        const v88 = new Uint8ClampedArray();
        const v91 = [v88,[v88]];
        v91.splice(v88, ...v91, 3);
        return v70;
    },
    "d": v36,
};
new Proxy(v79, o93);
const v99 = Symbol.toPrimitive;
const o103 = {
    [v99]() {
        try {
            super.getUint16();
        } catch(e102) {
        }
        return this;
    },
};
function F110(a112, a113, a114, a115) {
    if (!new.target) { throw 'must be called with new'; }
    a114.d = a115;
    a114.f = a112;
}
const v116 = new F110(-4294967296, 5n, "-16", "-16");
const v117 = new F110(-1, -7n, "-16", "global");
const v118 = new F110(-4294967296, v117, "global", "global");
"-16" == v118;
if (-1) {
} else {
    function F123(a125, a126, a127) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a127;
    }
    const v128 = new F123(F123, v116, "function");
    const t86 = -1;
    new t86(v128, "global", "function");
    new F123(v128, "global", "function");
}
