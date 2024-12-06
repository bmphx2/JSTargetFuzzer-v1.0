function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = undefined;
    this.a = undefined;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v6 = [268435439,1];
const v7 = [-2,-14,-55242,4294967295];
[12,16,10000];
const v10 = new WeakMap();
function f11(a12, a13) {
    const o20 = {
        "d": WeakMap,
        [v6]: v10,
        9: a12,
        [v5](a15, a16) {
            try {
                super.clz32(v4, v6, F1, a16);
            } catch(e18) {
            }
            delete a12?.h;
            a12.f = v5;
            return v7;
        },
    };
    return o20;
}
f11(v4, v3);
const v22 = f11(v5, v3);
f11(v5, v5);
const v24 = WeakMap + v3;
function* f25(a26, a27) {
    new Date();
    yield v24;
    return v5;
}
f25(v22, f25);
