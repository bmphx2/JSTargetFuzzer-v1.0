const v1 = new Set();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = Set;
}
const v5 = new F2(F2);
const v6 = new F2(F2);
const v7 = new F2(v6);
function f8(a9, a10) {
    function F11(a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C14 extends F11 {
        constructor(a16, a17, a18) {
            this[a16] = a18;
        }
    }
    const o19 = {
        [a9]: v1,
        [v5]: a10,
        "g": F2,
        "e": F2,
        ...v1,
        __proto__: v5,
        [a10]: F2,
        "c": v6,
        "d": a10,
        [F2]: a10,
        1301345935: a9,
        "a": v7,
        ...a9,
        "h": v5,
        [v1]: Set,
        ...v5,
        "f": a10,
        "d": a9,
        2147483647: a10,
    };
    return o19;
}
f8(v5, v7, F2, v5);
const v21 = f8(v1, v5);
f8(F2, v21, v21, v6);
[v1,v5,f8,26896];
[[v21]];
const v32 = ([])[Symbol.iterator];
try { v32(); } catch (e) {}
