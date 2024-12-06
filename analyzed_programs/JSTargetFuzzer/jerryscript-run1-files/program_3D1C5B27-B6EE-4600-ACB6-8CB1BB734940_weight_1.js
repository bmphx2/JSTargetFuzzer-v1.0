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
function F18() {
    if (!new.target) { throw 'must be called with new'; }
}
const v20 = new F18();
const o23 = {
    valueOf() {
        this();
        return v20;
    },
};
const v24 = f3(9223372036854775807);
const v25 = f3(9223372036854775807);
const v26 = f3(1);
function f27(a28, a29, a30, a31) {
    const o36 = {
        "f": 1,
        "d": a29,
        "a": a31,
        __proto__: v24,
        get h() {
            a31[this] = v25;
            return v25;
        },
        "c": a31,
        "b": v24,
        "h": v26,
    };
    let v37 = 0;
    do {
        9223372036854775807 / 2147483648;
        v37++;
    } while (v37 < 7)
    return o36;
}
const v42 = f27(1, v26, v24, v26);
f27(9223372036854775807, v42, v42, v42);
f27(2147483648, v24, v25, v25);
function f51() {
    return 2n;
}
const t65 = 16;
t65.toString = f51;
const t67 = f51();
const v59 = delete t67[5n];
function f60() {
    return f51;
}
const v66 = new Uint8Array(2);
let v68 = Float32Array;
const v69 = new v68(127);
new Int32Array(243, 243, v59);
new gc();
new Number(127);
new BigInt64Array(3886);
new Uint32Array(0);
v68 += v68;
let v84;
try { v84 = gc(v66); } catch (e) {}
const v86 = [v84];
Reflect.apply(v86.sort, v69, v86);
try { v86.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
