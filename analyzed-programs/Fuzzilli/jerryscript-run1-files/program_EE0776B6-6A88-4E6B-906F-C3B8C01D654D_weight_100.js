function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 10;
    this.d = 10;
}
const v3 = new F0();
const v4 = new F0();
new F0();
const v10 = new Set();
[[[2.2250738585072014e-308],v4,F0,2.2250738585072014e-308],9.71930421164078e+307,0.8419953574531973,v3,v10];
new Array(8);
const v24 = [65536];
const v25 = [v24,1073741824,true,24654];
[v24,65536];
-v25;
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
            "defineProperty": Array,
            "deleteProperty": Array,
            "getPrototypeOf": Array,
            "preventExtensions": Array,
            "set": Array,
        };
        new Proxy(this, o35);
        try { v32(); } catch (e) {}
        return true;
    },
};
