function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65536;
    this.h = -65536;
    this.e = -65536;
}
new F0();
new F0();
new F0();
new Float32Array(15);
new Uint16Array(5);
new Int8Array(183);
[3,-65535];
[-9223372036854775808,257];
const v20 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v31 = new Int32Array(3004);
const v34 = new Uint32Array(1);
new Float64Array(8);
function f39(a40, a41, a42) {
    const o65 = {
        "d": 11,
        "h": v20,
        [a41](a44, a45) {
            const v46 = v34[a44];
            try { v31.every(v46, a40); } catch (e) {}
            try { v20.flat(3004); } catch (e) {}
            for (let v49 = 0; v49 < 32; v49++) {
                a40["p" + v49] = v49;
            }
            Number && 1000000000.0;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0, 1000000000.0);
            Number + Number;
            return a40;
        },
    };
    return o65;
}
f39(1279509201, f39(f39(-2, v20, 11), 6, 1024), 1279509201);
let v69 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v70 = [6,17590];
[-658853788,-256];
new Int8Array(1000);
new Float32Array(128);
new BigInt64Array(1000);
let v88 = BigUint64Array;
const v89 = new v88(12);
const v92 = new Uint32Array(v70);
new Uint8Array(16);
let v97;
try { v97 = v69(-4294967295); } catch (e) {}
({"buffer":v69,"d":v88,"g":v97,...v97} = v89);
const o98 = {
};
new Proxy(v92, o98);
const v104 = Symbol.toPrimitive;
const o108 = {
    [v104]() {
        try {
            super.getUint16();
        } catch(e107) {
        }
        return this;
    },
};
function F115(a117, a118, a119, a120) {
    if (!new.target) { throw 'must be called with new'; }
    a119.d = a120;
    this.f = a117;
}
const v121 = new F115(-4294967296, 5n, "-16", "-16");
new F115(-1, -7n, "-16", "global");
const v123 = new F115(-4294967296, 5n, "global", "global");
Array(246).concat();
"12" + 257;
"-16" == v123;
if (-1) {
} else {
    function F135(a137, a138, a139) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a139;
    }
    const v140 = new F135(F135, v121, "function");
    const t84 = -1;
    new t84(v140, "global", "function");
    new F135(v140, "global", "function");
}
