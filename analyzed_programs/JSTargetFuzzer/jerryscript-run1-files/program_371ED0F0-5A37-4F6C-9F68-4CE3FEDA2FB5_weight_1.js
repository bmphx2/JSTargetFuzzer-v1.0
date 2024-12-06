function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65536;
    this.h = -65536;
    this.e = -65536;
}
const v3 = new F0();
const v4 = new F0();
new F0();
new Float32Array(15);
new Uint16Array(5);
new Int8Array(183);
[3,-65535];
[-9223372036854775808,257];
const v20 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v31 = new Int32Array(3004);
const v34 = new Uint32Array(1);
const v37 = new Float64Array(8);
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
const v66 = f39(-2, v20, 11);
const v67 = f39(v66, 6, 1024);
const v68 = f39(1279509201, v67, 1279509201);
let v69 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v70 = [6,17590];
[-658853788,-256];
Object.defineProperty(v68, 688536092, { value: v4 });
const v74 = v37 || f39;
Math.acos(f39);
const v76 = v74 / v74;
+v74;
Math.log(257);
let v80 = 16;
const t52 = "return";
t52.__proto__ = [0.6214338841235527,-635.2470542612919,NaN,9.408124046375676,0.677509191839934,-1000000000000.0,-1e-15,-612673.5313187679,-1000000000.0];
const v90 = new Int8Array(1000);
-45.09198311274611 << --v80;
delete v66[v76];
v31.__proto__;
try { v67.toString(128, v90, v3, v70); } catch (e) {}
new Float32Array(128);
new BigInt64Array(1000);
let v102 = BigUint64Array;
const v103 = new v102(12);
const v106 = new Uint32Array(v70);
new Uint8Array(16);
let v111;
try { v111 = v69(-4294967295); } catch (e) {}
({"buffer":v69,"d":v102,"g":v111,...v111} = v103);
const o112 = {
};
new Proxy(v106, o112);
const v118 = Symbol.toPrimitive;
const o122 = {
    [v118]() {
        try {
            super.getUint16();
        } catch(e121) {
        }
        return this;
    },
};
function F129(a131, a132, a133, a134) {
    if (!new.target) { throw 'must be called with new'; }
    a133.d = a134;
    this.f = a131;
}
const v135 = new F129(-4294967296, 5n, "-16", "-16");
new F129(-1, -7n, "-16", "global");
const v137 = new F129(-4294967296, 5n, "global", "global");
Array(246).concat();
"12" + 257;
"-16" == v137;
if (-1) {
} else {
    function F149(a151, a152, a153) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a153;
    }
    const v154 = new F149(F149, v135, "function");
    const t99 = -1;
    new t99(v154, "global", "function");
    new F149(v154, "global", "function");
}
