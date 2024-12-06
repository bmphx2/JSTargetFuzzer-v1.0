function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.g = -10;
}
const v7 = new F3(-4294967295, 2147483649);
const v8 = new F3(v7, -10);
const v9 = new F3(v8, 2147483649);
class C10 extends F3 {
    constructor(a12, a13) {
        super(v9, -10, F3, F3, v8);
        v9[Symbol.unscopables];
    }
    static m(a18, a19, a20) {
        const v22 = Symbol.species;
        this[v9] = 2147483649;
        return v22.__proto__;
    }
}
new C10(2147483649, v8);
const v25 = [-894.1614607655206,492456.8169117365,-1e-15,1e-15,-617295.771918849,1.3943333321474277e+308,Infinity,4.0,1.0];
const v26 = [-1000.0,7.034592294388261e+307];
const v29 = new BigUint64Array(Array);
Object.defineProperty(v25, v29, { enumerable: true, value: v26 });
new C10(2147483649, C10);
new C10(2147483649, v8);
(1.1973589163466798 ^ 2147483649) * -4.473924600681509;
