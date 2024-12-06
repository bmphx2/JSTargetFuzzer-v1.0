function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 15;
    this.h = 15;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.f = f6;
    this.b = F0;
}
const v11 = new F7(v3, v3);
const v12 = new F7(v3, v3);
const v13 = new F7(v3, v4);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v12;
    this.c = a17;
}
const v19 = new F14(v3, v12, v13);
const v20 = new F14(v4, v12, v19);
new F14(v19, v11, v20);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740992;
}
new F32(9007199254740992, -4294967297, 9007199254740992, 1642475875);
new F32(2147483648, 15, 9007199254740992, 15);
new F32(1642475875, 2147483648, -4096, 1642475875);
function f43(a44, a45) {
    const o52 = {
        3: a44,
        "f": a45,
        __proto__: a45,
        "h": 15,
        "a": a45,
        "c": a44,
        o(a47) {
            15 || -9;
            return a45;
        },
    };
    return o52;
}
f43(-1n, 15);
f43(-1n, 15);
const v56 = new Uint16Array(15);
const v59 = new Int16Array(368);
let v60 = 4096;
new Int16Array(v60);
function f63(a64, a65, a66, a67) {
    const o72 = {
        get d() {
            return v56;
        },
        "g": Int16Array,
        "e": v59,
        "d": v56,
        "a": a66,
    };
    return o72;
}
f63(v60, v56, 15, v60);
f63(15, Uint16Array, v60, 368);
const v75 = [1e-15];
v75.reverse();
function f81(a82, a83, a84, a85) {
    const o90 = {
        get e() {
            super.g = Int16Array;
            [-1];
            [-2147483647,-9223372036854775807,22869,6,-662153035,1100027444,268435441];
            return [-2147483647,8824];
        },
        "e": 4,
        "h": 4096,
        [4096]: a84,
        "f": 255,
        "a": a82,
        "d": 1073741824,
        [a82]: a84,
        [1073741824]: 255,
        "g": a85,
        "b": v56,
    };
    return o90;
}
f81(4096, 4, 4, 4);
f81(255, 255, 4, 4096);
!4;
f63(v60, v56, 15, 368);
368 + v59;
for (let i97 = 0;
    (() => {
        const v99 = [1024,1000,-65536,13,52268,-9223372036854775807,-9,48090];
        const v100 = [33333,6,-58422,9007199254740992,-65535];
        try { v99["join"](...v100, ...-1073741824, ...v99, ..."join", ..."join", -1073741824); } catch (e) {}
        return i97 < 9;
    })();
    i97++) {
    v60 = i97;
    v60 <<= i97;
    const o114 = {
        "call": f63,
        "construct": f63,
        "deleteProperty": f63,
        "get": f63,
        "getOwnPropertyDescriptor": f63,
        "has": f63,
        "isExtensible": f63,
        "h": 1642475875,
        "getPrototypeOf": Uint16Array,
        [F32](a109) {
            const v110 = a109 && i97;
            for (let v111 = 0; v111 < 32; v111++) {
                v110["p" + v111] = v111;
            }
            return a109;
        },
        "ownKeys": f63,
        "preventExtensions": f63,
        "set": f63,
        "setPrototypeOf": f63,
    };
    const v115 = [1,0,6];
    const v116 = [40080,-44219,-1868573688];
    let v117 = 0.9379757245345632;
    class C120 {
        [v115] = 2.220446049250313e-16;
        valueOf(a122, a123) {
            for (let v124 = 0; v124 < 25; v124++) {
                this[-1000000000000.0] = v124;
                ({"a":v124,"g":v124,"length":v117,} = v75);
                this.d;
            }
            v75[v75];
            return this;
        }
        m(a128, a129, a130, a131) {
            let v133 = -40108;
            let v134 = 4294967297;
            const v136 = -9.041996411935051e+307 >>> -9.041996411935051e+307;
            const v137 = ++v133;
            Math.ceil(v136);
            v137 % v136;
            v134++;
            a129 && v133;
            !-9.041996411935051e+307;
            return 2.220446049250313e-16;
        }
    }
    function f146(a147, a148, a149) {
        const o150 = {
            "h": C120,
        };
        return o150;
    }
    f146(f146(Float64Array, 128, v116), -16213, v75);
    new Proxy(v59, o114);
}
