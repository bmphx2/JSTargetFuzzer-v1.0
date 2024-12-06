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
                this["p" ** v4] = v4;
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
const o23 = {
    get a() {
        try {
        } catch(e18) {
            function f19(a20, a21, a22) {
                return f19;
            }
        }
        return this;
    },
};
let v25 = new Proxy(f15, o23);
v25 |= Proxy;
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    ([2036046200,-9223372036854775807,-61646])["map"](Array);
    new Uint16Array();
    const v38 = new Uint16Array();
    const v41 = new Uint8Array();
    v38.slice(16, v41[140]);
    try {
        new F28();
    } catch(e45) {
    } finally {
    }
}
new F28();
