function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 15;
    this.h = 15;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(v4);
function f6() {
    const o7 = {
    };
    const v9 = new Proxy(f6, o7);
    F0 = v9;
    return v5;
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a12;
    v5.f = f6;
    this.b = F0;
}
const v14 = new F10(v3, v3);
const v15 = new F10(v3, v3);
const v16 = new F10(v3, v4);
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v15;
    this.c = a20;
}
const v22 = new F17(v3, v15, v16);
const v23 = new F17(v4, v15, v22);
new F17(v22, v14, v23);
function F35(a37, a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740992;
}
new F35(9007199254740992, -4294967297, 9007199254740992, 1642475875);
new F35(2147483648, 15, 9007199254740992, 15);
new F35(1642475875, 2147483648, -4096, 1642475875);
function f46(a47, a48) {
    const o55 = {
        372201942: a47,
        "f": a48,
        __proto__: a48,
        "h": 15,
        "a": a48,
        "c": a47,
        o(a50) {
            15 || -9;
            return a48;
        },
    };
    return o55;
}
f46(-1n, 15);
f46(-1n, 15);
const v59 = new Uint16Array(15);
const v62 = new Int16Array(368);
let v63 = 4096;
new Int16Array(v63);
function f66(a67, a68, a69, a70) {
    const o75 = {
        get d() {
            return -227133436;
        },
        "g": Int16Array,
        "e": v62,
        "d": v59,
        "a": a69,
    };
    return o75;
}
f66(v63, v59, 15, v63);
f66(15, Uint16Array, v63, 368);
const v78 = [1e-15];
v78.reverse();
function f84(a85, a86, a87, a88) {
    const o93 = {
        get e() {
            super.g = v63;
            [-1];
            [-2147483647,-9223372036854775807,22869,6,-662153035,1100027444,268435441];
            return [-2147483647,8824];
        },
        "e": 4,
        "h": 4096,
        [4096]: a87,
        "f": 255,
        "a": a85,
        "d": 1073741824,
        [a85]: a87,
        [1073741824]: 255,
        "g": a88,
        "b": v59,
    };
    return o93;
}
f84(4096, 4, 4, 4);
f84(255, 255, 4, 4096);
f66(v63, v59, !4, 368);
368 + v62;
for (let i100 = 0;
    (() => {
        const v102 = [1024,1000,-65536,13,52268,-9223372036854775807,-9,48090];
        const v103 = [33333,6,-58422,9007199254740992,-65535];
        try { v102["join"](...v103, ...-1073741824, ...v102, ..."join", ..."join", -1073741824); } catch (e) {}
        return i100 < 9;
    })();
    i100++) {
    v63 = i100;
    v63 <<= i100;
    const o117 = {
        "call": f66,
        "construct": v15,
        "deleteProperty": f66,
        "get": f66,
        "getOwnPropertyDescriptor": f66,
        "f": f66,
        "isExtensible": f66,
        "h": 1642475875,
        "getPrototypeOf": Uint16Array,
        [F35](a112) {
            const v113 = a112 && i100;
            for (let v114 = 0; v114 < 32; v114++) {
                v113["p" + v114] = v114;
            }
            return a112;
        },
        "hasInstance": f66,
        "preventExtensions": f66,
        "set": f66,
        "setPrototypeOf": f66,
    };
    const v118 = [256,6,65535,10,-15582,-16,53589,4096];
    const v119 = [40080,-44219,-1868573688];
    let v120 = 0.9379757245345632;
    class C123 {
        [v118] = 2.220446049250313e-16;
        valueOf(a125, a126) {
            for (let v127 = 0; v127 < 25; v127++) {
                this[-1000000000000.0] = v127;
                ({"a":v127,"g":v127,"length":v120,} = v78);
                this.d;
            }
            v78[v78];
            return this;
        }
        getSeconds(a131, a132, a133, a134) {
            let v136 = -40108;
            let v137 = 4294967297;
            const v139 = -9.041996411935051e+307 || -9.041996411935051e+307;
            const v140 = ++v136;
            Math.ceil(v139);
            v140 % v139;
            v137++;
            a132 && v136;
            !-9.041996411935051e+307;
            return 2.220446049250313e-16;
        }
    }
    function f149(a150, a151, a152) {
        const o153 = {
            "h": C123,
        };
        return o153;
    }
    f149(f149(Float64Array, 128, v119), -16213, v78);
    new Proxy(v62, o117);
}
