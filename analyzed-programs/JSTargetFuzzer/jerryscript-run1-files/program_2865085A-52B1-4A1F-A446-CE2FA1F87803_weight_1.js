function f6(a7, a8, a9, a10) {
    const o16 = {
        "f": 482121647,
        get c() {
            let v12;
            try { v12 = this.m(a9, a7, a10, 1082384820, a9, 482121647); } catch (e) {}
            v12.MIN_VALUE = 482121647;
            return -65535;
        },
        ...a10,
        __proto__: a9,
    };
    return o16;
}
f6(4096, 47503, 4096, 47503);
f6(47503, -1013398779, 47503, 482121647, 268435439, 1082384820);
f6(268435439, 4096, 482121647, 268435439);
let v20 = false;
function F21() {
    if (!new.target) { throw 'must be called with new'; }
}
new F21();
2n > v20++;
