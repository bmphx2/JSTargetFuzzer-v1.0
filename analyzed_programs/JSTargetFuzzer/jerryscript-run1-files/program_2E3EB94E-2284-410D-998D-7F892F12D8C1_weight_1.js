function f0() {
}
function f1() {
    const o7 = {
        "c": f0,
        "d": f0,
        "b": f0,
        [f0]: f0,
        o() {
            this[this] **= this;
            this && f0;
            for (let v4 = 0; v4 < 32; v4++) {
                this["p" + v4] = v4;
            }
            return this;
        },
    };
    return o7;
}
f1();
f1();
f1();
const v12 = new WeakMap();
function f13() {
    return v12;
}
function f15(a16) {
    return a16;
}
const o17 = {
};
let v19 = new Proxy(f15, o17);
v19 |= Proxy;
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    ([2036046200,-9223372036854775807,-61646])["map"](Array);
    try {
        new F22();
    } catch(e29) {
    } finally {
    }
}
new F22();
