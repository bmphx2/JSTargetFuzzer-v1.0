const v10 = new WeakMap();
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = [-9007199254740991,54726,1717830925,31978,16,4294967297,-28128,-15,-806491297,127];
    const v17 = [-6,-1753580390,23989,-256,2013761253,-1,-69];
    const v18 = [0.6476119767844933,-2.0];
    const v19 = [1.7238796683190766e+308,-2.2250738585072014e-308,1000000000000.0,-1e-15,-564884.778537949,-123.0845695596463,-1.4240817408261063e+308,-1000000.0,0.4227936485118873];
    Object.defineProperty(v16, 256, { writable: true, configurable: true, enumerable: true, value: v18 });
    for (let i = 0; i < 10; i++) {
        Reflect.apply(v19.shift, v17);
    }
    this.d = a13;
}
new F11(1000474082, -4, 1382422952n);
new F11(-1073741824, 5, WeakMap);
new F11(5, -1073741824, v10);
const o29 = {
    get g() {
        return this;
    },
    set g(a28) {
    },
};
