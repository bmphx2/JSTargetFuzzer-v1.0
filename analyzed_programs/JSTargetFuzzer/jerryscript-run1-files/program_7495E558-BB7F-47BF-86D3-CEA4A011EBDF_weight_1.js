function f0() {
    const o10 = {
        "b": "valueOf",
        ["valueOf"](a5, a6) {
            return 65537;
        },
        10: -3.0,
        __proto__: "valueOf",
        [-3.0]: -50553,
        "d": -3.0,
        "c": -50553,
        ..."valueOf",
    };
    return o10;
}
const v11 = f0();
const v12 = f0();
const v13 = f0();
const v18 = [[v11,5,v11,5],v11];
const v19 = [v18,v13,v11,25970,v18];
function f20(a21, a22, a23) {
    const o29 = {
        "g": v18,
        "b": v18,
        68: a23,
        __proto__: v18,
        [a23]: a21,
        set e(a25) {
            a23 /= -4;
            [v12,this];
            [a21,a23,a23];
            [25970,v18];
        },
        "e": f0,
        "a": a22,
    };
    return o29;
}
f20(5, v19, -4);
f20(25970, v18, 25970);
f20(5, v19, 25970);
function f34() {
    return -4;
}
new Float64Array(413);
const v40 = new Int8Array(256);
new Int8Array(16);
[3,-65535];
[-9223372036854775808,257];
const v45 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v52 = new Int32Array(3004);
const v55 = new Uint32Array(1);
const v57 = new Float64Array(8);
function f59(a60, a61, a62) {
    const o81 = {
        "d": 11,
        "h": v45,
        [a61](a64, a65) {
            const v66 = v55[a64];
            try { v52.every(v66); } catch (e) {}
            try { v45.flat(3004); } catch (e) {}
            for (let v69 = 0; v69 < 5; v69++) {
                a60["p" + v69] = v69;
            }
            Number && 1000000000.0;
            Math.trunc(16);
            Math.abs(Number);
            Math.pow(1000000000.0);
            Number + Number;
        },
    };
    return o81;
}
f59(1279509201, f59(f59(-2, v45, 11), 6, 1024), 1279509201);
let v85 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v86 = [6,17590];
[-658853788,-256];
v57.c = 9007199254740991;
try { v40.every(f59, v85); } catch (e) {}
let v91 = BigUint64Array;
const v92 = new v91(12);
const o94 = {
    ..."42599",
};
const v95 = new Uint32Array(v86);
new Uint8Array(16);
let v99;
try { v99 = v85(-4294967295); } catch (e) {}
({"buffer":v85,"d":v91,"g":v99,...v99} = v92);
const o100 = {
};
new Proxy(v95, o100);
const v106 = Symbol.toPrimitive;
const o110 = {
    [v106]() {
        try {
            super.getUint16();
        } catch(e109) {
        }
    },
};
function F116(a118, a119, a120, a121) {
    if (!new.target) { throw 'must be called with new'; }
    a120.d = a121;
    this.f = a118;
}
const v122 = new F116(-4294967296, 5n, "-16", "-16");
new F116(-1, -7n, "-16", "global");
const v124 = new F116(-4294967296, 5n, "global", "global");
"-16" == v124;
if (-1) {
} else {
    function F126(a128, a129, a130) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a130;
    }
    const v131 = F126(F126, v122, "function");
    class C132 extends F116 {
        127;
        static a = v122;
    }
    new C132();
    new C132();
    new C132();
    const t124 = -1;
    new t124(v131, "global", "function");
}
