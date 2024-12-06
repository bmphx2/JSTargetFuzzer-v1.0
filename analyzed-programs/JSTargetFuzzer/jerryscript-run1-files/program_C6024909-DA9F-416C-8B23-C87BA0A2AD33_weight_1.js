function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4;
    this.g = 4;
    class C3 {
        [4];
    }
    new C3();
    new C3();
    new C3();
}
const v7 = new F0();
const v8 = new F0();
const v9 = new F0();
new Int8Array(256);
new BigUint64Array(1024);
new Int32Array(4);
[-2.2250738585072014e-308,v8,v8];
[-2.2250738585072014e-308,v9,[-2.2250738585072014e-308,v7,-452.0302800080915,-452.0302800080915],F0];
("undefined")[[-0.0,2.2250738585072014e-308,5.0,1.207728181434696e+308,-5.0]];
