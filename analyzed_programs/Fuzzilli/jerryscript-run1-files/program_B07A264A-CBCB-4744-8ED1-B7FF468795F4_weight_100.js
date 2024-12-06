function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 10;
    this.d = 10;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new Set();
const v12 = [[2.2250738585072014e-308],v4,F0,2.2250738585072014e-308];
const v13 = [v12,9.71930421164078e+307,7.249521058646842e+307,v3,v5];
new Array(8);
const v24 = [65536];
[v24,1073741824,true,24654];
const v26 = [v24,65536,9.71930421164078e+307,v13,40310];
-v5;
const o42 = {
    valueOf() {
        let {"h":v32,} = this;
        try {
            super.valueOf();
        } catch(e34) {
        }
        const o35 = {
            "apply": Array,
            "call": Array,
            "construct": Array,
            "defineProperty": 2.2250738585072014e-308,
            "deleteProperty": v12,
            "getPrototypeOf": Array,
            "preventExtensions": F0,
            "dotAll": v26,
        };
        new Proxy(this, v4);
        try { v32(); } catch (e) {}
        return true;
    },
};
