function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 10;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    constructor(a8, a9) {
        if (a8 >= a9) {
            new BigUint64Array(1024);
            new Uint32Array(4081);
            new Uint32Array(208);
        } else {
            const v23 = Symbol.toPrimitive;
            const o26 = {
                [v23]() {
                    super.a = Uint8Array();
                },
            };
            new Array(15);
        }
    }
}
new C6(v4, v5);
new C6(v5, v3);
new C6(v5, v3);
let v36 = -2.0;
let v37 = "M";
const o39 = {
    get d() {
        [,v36,...v37] = "o";
        return this;
    },
};
