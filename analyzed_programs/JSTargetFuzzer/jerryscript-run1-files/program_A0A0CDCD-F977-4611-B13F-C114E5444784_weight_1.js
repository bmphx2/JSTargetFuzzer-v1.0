function f0() {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = new F1();
    const o4 = {
    };
    const v6 = new Proxy(v3, o4);
    v6 > v6;
    const o17 = {
        __proto__: "PI",
        ["PI"](a12, a13) {
            this.__proto__;
            try {
                super.n();
            } catch(e16) {
            }
            return "valueOf";
        },
        ["qFvJw"]: "PI",
        "e": "PI",
        "b": "PI",
        ["PI"]: "PI",
        "a": "PI",
    };
    return o17;
}
f0();
f0();
f0();
new Uint8Array(256);
new Uint8Array(829);
new Int8Array(8);
function f39(a40, a41) {
    const o49 = {
        ...a41,
        "c": a41,
        "b": 1073741824,
        "e": a41,
        __proto__: a41,
        [3](a43, a44, a45) {
            try {
                super.m(a41, a43, a45, a43);
            } catch(e47) {
            }
            const v48 = this[8];
            a40 **= -33749;
            return v48;
        },
    };
    return o49;
}
f39(10000, 512);
f39(-33749, f39);
f39(3, f39);
function F53(a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a56;
}
new F53(10000, 3);
const v58 = new F53(512, 22165);
new F53(1073741824, 3);
delete v58[1509295508];
Math.sinh(F53);
Math.sinh(10000);
const v70 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v70);
