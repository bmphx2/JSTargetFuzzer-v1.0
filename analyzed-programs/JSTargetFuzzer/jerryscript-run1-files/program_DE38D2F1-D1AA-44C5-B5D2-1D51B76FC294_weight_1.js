const v1 = new Map();
function f2(a3) {
    const o10 = {
        __proto__: v1,
        2147483649: Map,
        ...a3,
        "a": v1,
        [Map]: Map,
        get c() {
            a3[Symbol.unscopables] = v1;
            return a3;
        },
        ...v1,
    };
    return o10;
}
f2(f2);
f2(f2);
f2(v1);
const v27 = ([]).indexOf;
Reflect.apply(v27, v27);
function f33(a34, a35) {
    const o43 = {
        ...a35,
        "c": a35,
        "b": 1073741824,
        "e": a35,
        __proto__: a35,
        [3](a37, a38, a39) {
            try {
                super.m(a35, a37, a39, a37);
            } catch(e41) {
            }
            const v42 = this[8];
            a34 **= -33749;
            return v42;
        },
    };
    return o43;
}
f33(10000, 512);
f33(-33749, f33);
f33(3, f33);
function F47(a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a50;
}
new F47(10000, 3);
const v52 = new F47(512, 22165);
new F47(1073741824, 3);
delete v52[1509295508];
Math.sinh(F47);
Math.sinh(10000);
const v64 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v64);
