function f0() {
    const o8 = {
        ..."gLp",
        set h(a5) {
            ([])[4294967295];
            super.a = "gLp";
        },
        ..."gLp",
        __proto__: "undefined",
        "c": "undefined",
        ["gLp"]: "1024",
        "b": "undefined",
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v12 = [v9,f0()];
const v13 = [f0];
const v14 = [v13,v12];
[127,0];
const v16 = [40875,5,268435456,-49049,-10,-268435456,2147483648];
const v17 = [-49148,536870912,43950,-65537,0,16004,15];
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v14;
    this.a = v16;
    this.f = v13;
}
new F18(v17, v9, v16);
new F18(v12, v10, v16);
new F18(v13, v10, v12);
[3,-65535];
[-9223372036854775808,257];
const v28 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v40 = new Uint16Array();
const v42 = new Uint8Array(v40, v40);
v42.byteLength;
v42.byteOffset;
with (v42.__proto__) {
    try { a(a, a); } catch (e) {}
}
const v48 = new Int32Array(3004);
const v51 = new Uint32Array(1);
new Float64Array(8);
function f56(a57, a58, a59) {
    const o87 = {
        "d": 11,
        "h": v28,
        [a58](a61, a62) {
            const v63 = v51[a61];
            try { v48.every(v63, a57); } catch (e) {}
            try { v28.flat(3004); } catch (e) {}
            for (let v66 = 0; v66 < 32; v66++) {
                a57["p" + v66] = v66;
            }
            const v76 = new Int16Array(255);
            Reflect.apply(Float64Array, v76);
            Number && 1000000000.0;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0, 1000000000.0);
            Number + Number;
            return a57;
        },
    };
    return o87;
}
const v88 = f56(-2, v28, 11);
Math[Float64Array] = WeakMap;
const v91 = `
    let v93 = +-65537;
    v93++;
`;
f56(1279509201, f56(v88, 6, 1024), 1279509201);
let v97 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v98 = [6,17590];
[-658853788,-256];
let v104 = BigUint64Array;
const v105 = new v104(12);
const v108 = new Uint32Array(v98);
new Uint8Array(16);
let v113;
try { v113 = v97(-4294967295); } catch (e) {}
({"buffer":v97,"d":v104,"g":v113,...v113} = v105);
const o114 = {
};
new Proxy(v108, o114);
const v120 = Symbol.toPrimitive;
const o124 = {
    [v120]() {
        try {
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
    const t114 = -1;
    new t114(v149, "global", "function");
    new F144(v149, "global", "function");
}
