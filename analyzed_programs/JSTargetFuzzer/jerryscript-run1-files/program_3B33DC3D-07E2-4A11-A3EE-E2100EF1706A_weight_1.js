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
const v12 = f0();
f0();
f0();
function f15() {
    return f0;
}
new WeakMap();
const v20 = new Int16Array(8);
new Uint32Array(1192);
const v26 = new Int32Array(960);
[3,-65535];
[-9223372036854775808,257];
const v29 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
try { v26.copyWithin(1192, 960); } catch (e) {}
v20[f0] = f0;
Object.defineProperty(v12, v26, { writable: true, value: v20 });
function f31() {
    return 8;
}
const v42 = new Int32Array(3004);
const v45 = new Uint32Array(1);
const v54 = new Float64Array(8);
function f56(a57, a58, a59) {
    const o82 = {
        "d": 11,
        "h": v29,
        [a58](a61, a62) {
            const v63 = v45[a61];
            try { v42.every(v63, a57); } catch (e) {}
            try { v29.flat(3004); } catch (e) {}
            for (let v66 = 0; v66 < 32; v66++) {
                a57["p" + v66] = v66;
            }
            Number && 1000000000.0;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0, 1000000000.0);
            Number + Number;
            return a57;
        },
    };
    return o82;
}
f56(1279509201, f56(f56(-2, v29, 11), 6, 1024), 1279509201);
let v86 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v87 = [6,17590];
[-658853788,-256];
let v93 = BigUint64Array;
const v94 = new v93(12);
const v97 = new Uint32Array(v87);
new Uint8Array(16);
let v102;
try { v102 = v86(-4294967295); } catch (e) {}
({"buffer":v86,"d":v93,"g":v102,...v102} = v94);
const o103 = {
};
new Proxy(v97, o103);
new Uint8ClampedArray(166);
new Uint32Array(16);
new Int16Array(5);
const v118 = Symbol.toPrimitive;
const o126 = {
    [v118]() {
        try {
            this.b;
            v54[this] = -4294967295;
            super.getUint16();
        } catch(e125) {
        }
        return this;
    },
};
function F133(a135, a136, a137, a138) {
    if (!new.target) { throw 'must be called with new'; }
    a137.d = a138;
    this.f = a135;
}
const v139 = new F133(-4294967296, 5n, "-16", "-16");
new F133(-1, -7n, "-16", "global");
const v141 = new F133(-4294967296, 5n, "global", "global");
"-16" == v141;
if (-1) {
} else {
    function F146(a148, a149, a150) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a150;
    }
    const v151 = new F146(F146, v139, "function");
    const t110 = -1;
    new t110(v151, "global", "function");
    new F146(v151, "global", "function");
}
