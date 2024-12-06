function f3(a4) {
    const o17 = {
        "b": 2147483648,
        "h": a4,
        valueOf(a6, a7) {
            this[7] = 1;
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a11;
                this.h = a12;
            }
            new F8(a7, a4, a6, a6);
            new F8(a7, 2147483648, 2147483648, a6);
            new F8(a4, a4, a6, a4);
            return 2147483648;
        },
        __proto__: a4,
        ...a4,
        "f": a4,
        [a4]: 2147483648,
        [1]: 2147483648,
        "a": 1,
    };
    return o17;
}
const v18 = f3(9223372036854775807);
const v19 = f3(9223372036854775807);
const v20 = f3(1);
function f21(a22, a23, a24, a25) {
    const o30 = {
        "f": 1,
        "d": a23,
        "a": a25,
        __proto__: v18,
        get h() {
            a25[this] = v19;
            return v19;
        },
        "c": a25,
        "b": v18,
        "h": v20,
    };
    let v31 = 0;
    do {
        9223372036854775807 / 2147483648;
        v31++;
    } while (v31 < 7)
    return o30;
}
const v36 = f21(1, v20, v18, v20);
f21(9223372036854775807, v36, v36, v36);
f21(2147483648, v18, v19, v19);
function f45() {
    return 2n;
}
const t55 = 16;
t55.toString = f45;
const t57 = f45();
const v53 = delete t57[5n];
function f54() {
    return f45;
}
const v60 = new Uint8Array(2);
let v62 = Float32Array;
const v63 = new v62(127);
new Int32Array(243, 243, v53);
new gc();
new Number(127);
new BigInt64Array(3886);
new Uint32Array(0);
v62 += v62;
let v78;
try { v78 = gc(v60); } catch (e) {}
const v80 = [v78];
Reflect.apply(v80.sort, v63, v80);
try { v80.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
