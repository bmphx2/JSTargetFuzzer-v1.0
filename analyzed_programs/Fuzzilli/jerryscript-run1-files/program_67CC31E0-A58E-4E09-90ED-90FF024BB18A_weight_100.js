function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.g = a5;
}
const v6 = new F3(-2147483648);
new F3(-65536);
const v8 = new F3(-2147483648);
function f12(a13, a14) {
    const o21 = {
        "f": a14,
        "g": a14,
        5: -2147483648,
        ...v6,
        [a13](a16, a17) {
            const v18 = [v8,a16];
            [-65536,v18,this,v18,-1n];
            [a13,-2147483648,a16];
            return this;
        },
        "d": -1n,
        "e": -4,
    };
    return o21;
}
f12(-2147483648, v6);
f12(-4, v6);
f12(-4, v8);
switch (16n) {
    case 16n:
        const o27 = {
            "maxByteLength": 3,
        };
        const v29 = new SharedArrayBuffer(1, o27);
        new DataView(v29);
        break;
}
