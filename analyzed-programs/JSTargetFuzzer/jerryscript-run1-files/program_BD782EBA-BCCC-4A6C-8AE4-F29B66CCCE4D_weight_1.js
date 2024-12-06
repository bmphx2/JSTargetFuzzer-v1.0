const v3 = [3n,3n,3n,-256n];
const v4 = [3n,3n,v3];
const v5 = [v3];
function f9(a10, a11, a12) {
    const o18 = {
        get h() {
            const v14 = this >>> 3n;
            a12 = v5;
            return v14;
        },
        ...v5,
        2: v4,
        __proto__: a12,
        ...a12,
    };
    return o18;
}
f9(440685498, 536870889, v3);
f9(440685498, 536870889, v4);
f9(440685498, 440685498, v5);
function f28(a29, a30) {
    const o38 = {
        ...a30,
        "c": a30,
        "b": 1073741824,
        "e": a30,
        __proto__: a30,
        [3](a32, a33, a34) {
            try {
                super.m(a30, a32, a34, a32);
            } catch(e36) {
            }
            const v37 = this[8];
            a29 **= -33749;
            return v37;
        },
    };
    return o38;
}
f28(10000, 512);
f28(-33749, f28);
f28(3, f28);
function F42(a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a45;
    const v47 = new BigInt64Array();
    v47.keys();
}
new F42(10000, 3);
const v50 = new F42(512, 22165);
new F42(1073741824, 3);
delete v50[1509295508];
Math.sinh(F42);
Math.sinh(10000);
const v62 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v62);
