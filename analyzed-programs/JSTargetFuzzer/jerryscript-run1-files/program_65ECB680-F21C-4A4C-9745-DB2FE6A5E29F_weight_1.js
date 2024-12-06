function f0() {
    const o11 = {
        __proto__: "R7A",
        "d": "R7A",
        ["o"]: "o",
        1: "R7A",
        get a() {
            const t7 = "R7A";
            t7.toString = this;
            function F5(a7) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a7;
                this.e = a7;
            }
            const v8 = new F5(this);
            const v9 = new F5(v8);
            new F5(F5);
            return v9;
        },
    };
    return o11;
}
f0();
f0();
f0();
function f15() {
    return f0;
}
new WeakMap();
new Int16Array(8);
new Uint32Array(1192);
new Int32Array(960);
[3,-65535];
[-9223372036854775808,257];
const v29 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v40 = new Int32Array(3004);
const v43 = new Uint32Array(1);
const v52 = new Float64Array(8);
function f54(a55, a56, a57) {
    const o80 = {
        "d": 11,
        "h": v29,
        [a56](a59, a60) {
            const v61 = v43[a59];
            try { v40.every(v61, a55); } catch (e) {}
            try { v29.flat(3004); } catch (e) {}
            for (let v64 = 0; v64 < 32; v64++) {
                a55["p" + v64] = v64;
            }
            Number && 1000000000.0;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0, 1000000000.0);
            Number + Number;
            return a55;
        },
    };
    return o80;
}
f54(1279509201, f54(f54(-2, v29, 11), 6, 1024), 1279509201);
let v84 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v85 = [6,17590];
[-658853788,-256];
let v91 = BigUint64Array;
const v92 = new v91(12);
const v95 = new Uint32Array(v85);
new Uint8Array(16);
let v100;
try { v100 = v84(-4294967295); } catch (e) {}
({"buffer":v84,"d":v91,"g":v100,...v100} = v92);
const o101 = {
};
new Proxy(v95, o101);
new Uint8ClampedArray(166);
new Uint32Array(16);
new Int16Array(5);
const v116 = Symbol.toPrimitive;
const o124 = {
    [v116]() {
        try {
            this.b;
            v52[this] = -4294967295;
            super.getUint16();
        } catch(e123) {
        }
        return this;
    },
};
function F131(a133, a134, a135, a136) {
    if (!new.target) { throw 'must be called with new'; }
    a135.d = a136;
    this.f = a133;
}
const v137 = new F131(-4294967296, 5n, "-16", "-16");
new F131(-1, -7n, "-16", "global");
const v139 = new F131(-4294967296, 5n, "global", "global");
"-16" == v139;
if (-1) {
} else {
    function F144(a146, a147, a148) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a148;
    }
    const v149 = new F144(F144, v137, "function");
    const t104 = -1;
    new t104(v149, "global", "function");
    new F144(v149, "global", "function");
}
