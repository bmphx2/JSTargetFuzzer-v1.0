function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
    this.a = 65535n;
    this.e = 536870887n;
}
const v7 = new F3(65535n, 536870887n);
const v8 = new F3(65535n, v7);
const v9 = new F3(536870887n, v7);
try {
} catch(e11) {
    function f12() {
        return e11;
    }
}
new Date();
function f17(a18, a19, a20, a21) {
    const o30 = {
        "b": 268435441n,
        "a": a19,
        __proto__: v7,
        "f": 4096n,
        "e": Date,
        184: 268435441n,
        2: a20,
        toString(a23, a24, a25, a26) {
            return -4294967296;
        },
    };
    return o30;
}
f17(536870887n, v9, 65535n, v7);
f17(536870887n, v9, 536870887n, v8);
f17(65535n, v9, v8, v7);
let v34 = 9007199254740992n;
v34--;
