function f0() {
}
class C1 extends f0 {
    d;
    m() {
        const v3 = this[536870912];
        for (let v4 = 0; v4 < 32; v4++) {
            v3["p" + v4] = v4;
        }
        return f0;
    }
}
new C1();
new C1();
new C1();
new Int16Array(4);
new Float32Array(7);
new Float64Array(33);
function f22(a23) {
    const o33 = {
        "a": -9007199254740992,
        "b": -9007199254740992,
        "d": 3,
        __proto__: a23,
        set e(a25) {
            a25.e %= 3;
            function F26(a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a29;
            }
            new F26(-9007199254740992, 3);
            new F26(a23, -9007199254740992);
            new F26(a25, -3293);
        },
    };
    return o33;
}
f22(3);
f22(-3293);
switch (3) {
    default:
        f22[1] = 4;
        break;
}
f22(-9007199254740992);
function f43() {
    const o51 = {
        set g(a48) {
            try { this.valueOf(a48, a48); } catch (e) {}
            function f50() {
                return 2.220446049250313e-16;
            }
        },
        ..."mpQOJ",
        __proto__: "mpQOJ",
        1073741825: 0.4903570457367682,
        1073741823: 2.220446049250313e-16,
    };
    return o51;
}
f43();
f43();
f43();
function f55() {
    return f43;
}
const v64 = new BigInt64Array(256);
v64.subarray(129, 129);
