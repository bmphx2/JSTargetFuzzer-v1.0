function f3(a4) {
    const o14 = {
        "a": -9007199254740992,
        "b": -9007199254740992,
        "d": 3,
        __proto__: a4,
        set e(a6) {
            a6.e %= 3;
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a10;
            }
            new F7(-9007199254740992, 3);
            new F7(a4, -9007199254740992);
            new F7(a6, -3293);
        },
    };
    return o14;
}
f3(3);
f3(-3293);
f3(-9007199254740992);
function f24() {
    const o32 = {
        set g(a29) {
            try { this.valueOf(a29, a29); } catch (e) {}
            function f31() {
                return 2.220446049250313e-16;
            }
        },
        ..."mpQOJ",
        __proto__: "mpQOJ",
        1073741825: 0.4903570457367682,
        1073741823: 2.220446049250313e-16,
    };
    return o32;
}
f24();
f24();
f24();
function f36() {
    return f24;
}
const v45 = new BigInt64Array(256);
v45.subarray(129, 129);
