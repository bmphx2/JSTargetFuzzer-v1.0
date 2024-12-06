const v2 = new Int8Array(256);
const v5 = new Int32Array(4);
new Float64Array(9);
[256,v2,v5];
const v11 = [v2];
[v11,true,9,256];
[3,-65535];
[-9223372036854775808,257];
const v15 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const v22 = new Int32Array(3004);
const v25 = new Uint32Array(1);
new Float64Array(256);
function f30(a31, a32, a33) {
    const o50 = {
        "d": 11,
        "h": v15,
        [a32](a35, a36) {
            const v37 = v25[a35];
            try { v22.every(v37, a31); } catch (e) {}
            try { v15.flat(3004); } catch (e) {}
            for (let v40 = 0; v40 < 5; v40++) {
                "p" + v40;
            }
            Math.trunc(Number && 1000000000.0);
            Math.abs(Number);
            Number + Number;
        },
    };
    return o50;
}
f30(1279509201, f30(f30(-2, v15, 4), 1024, 1024), 1279509201);
[-29049,-2147483647,2147483648,-261208865,0,-9,11];
[6,17590];
new BigUint64Array(12);
const v59 = new Uint32Array(v11);
const o60 = {
};
new Proxy(v59, o60);
Symbol.toPrimitive;
const o68 = {
    [o60]() {
        try {
        } catch(e67) {
        }
    },
};
function F74(a76, a77, a78, a79) {
    if (!new.target) { throw 'must be called with new'; }
    a78.d = a79;
    this.f = a76;
}
const v80 = new F74(-4294967296, 5n, "-16");
const v81 = new F74(-4294967296, 5n, "global", "global");
"-16" == v81;
if (!-1) {
    function F83(a85, a86, a87) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F83(F83, v80, "function");
}
