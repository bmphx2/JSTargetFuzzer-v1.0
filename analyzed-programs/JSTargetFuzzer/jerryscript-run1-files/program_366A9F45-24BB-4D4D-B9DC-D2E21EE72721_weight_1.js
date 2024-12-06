function f3(a4, a5) {
    const o15 = {
        [a4]: -4294967296,
        "c": a4,
        p(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a5;
                this.d = 15;
            }
            const v12 = new F8(a4, a5);
            new F8(a5, 15);
            new F8(15, -4294967296);
            return v12;
        },
    };
    return o15;
}
const v16 = f3(10, 15);
v16.c;
typeof 15 === "boolean";
const v24 = f3(15, 10);
const v25 = f3(-4294967296, 10);
function f26(a27, a28, a29) {
    const o36 = {
        "d": a28,
        "b": a28,
        "c": a28,
        "h": a29,
        __proto__: v24,
        ...v16,
        [a28]: a28,
        [v16](a31, a32) {
            const v33 = a32[1662669156];
            --a32;
            return a27;
            v33.f += a27;
            let v35;
            try { v35 = new v33(10, v33, a31, v33); } catch (e) {}
            return v35;
        },
    };
    return o36;
}
f26(10, f26, 15);
f26(-4294967296, 15, 15);
f26(10, v25, -4294967296);
new Set();
new Uint16Array(0);
new Float64Array(0);
new Int8Array(1445);
function F54() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F54;
    this.valueOf = -65537 in this;
    for (let v58 = 0; v58 < 32; v58++) {
        this["p" + v58] = v58;
    }
    this.f = -65537;
}
let v61 = new F54();
new F54();
const v64 = new Float32Array(Float32Array, Float32Array, Float32Array);
function f65(a66, a67, a68) {
    Object.defineProperty(v64, "g", { configurable: true, get: f65 });
    return a66;
}
const v69 = new F54();
new Uint32Array(5);
new Int32Array(5);
const v78 = new Uint8Array(150);
function f79() {
}
let v80 = 0;
do {
    v69 / v69;
    let v82 = 1073741824n;
    class C83 {
        constructor(a85, a86, a87, a88) {
            v82 >>= a87;
        }
    }
    v80++;
} while (v80 < 9)
new Uint8Array(0);
let v105 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v107 = new Int32Array(127);
const v108 = ("2147483647")[11];
v78 instanceof v105;
RegExp[8] = 4.0;
const t91 = "2147483647";
t91.__proto__ = v69;
Uint32Array < v108;
v105 /= v107;
const v112 = new WeakSet();
let v113 = 41365n;
for (; v113--;) {
}
const v120 = new BigInt64Array(2);
127 instanceof Int32Array;
function f123() {
    return v120;
}
v61 = v112;
([5]).reverse();
