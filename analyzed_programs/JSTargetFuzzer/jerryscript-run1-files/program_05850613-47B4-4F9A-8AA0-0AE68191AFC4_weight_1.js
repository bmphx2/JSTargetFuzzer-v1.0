function F0() {
    if (!new.target) { throw 'must be called with new'; }
    -Infinity < -65537n;
    this.e = 227681412;
}
const v6 = new F0();
new F0();
new F0();
const o14 = {
};
const v16 = new Proxy(v6, o14);
o14 / 1024;
new Int32Array(1024);
new BigInt64Array(3);
new Uint32Array(7);
const o26 = {
};
const o29 = {
    get f() {
        super.e = v16;
        return this;
    },
};
const v30 = new Proxy(Date, o26);
function F31(a33) {
    if (!new.target) { throw 'must be called with new'; }
}
class C34 extends F31 {
    constructor(a36, a37, a38) {
        super();
        v16.get();
    }
}
new v30();
