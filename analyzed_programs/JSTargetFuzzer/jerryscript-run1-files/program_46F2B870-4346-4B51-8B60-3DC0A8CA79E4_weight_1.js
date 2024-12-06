function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a5.a = a6;
    const t3 = "boolean";
    t3.g = "toString";
}
new F3("toString", "toString");
new F3("toString", "42922");
new F3("toString", "boolean");
new BigUint64Array(14);
new Int32Array(256);
new Uint32Array(255);
const v19 = [-9007199254740991,54726,1717830925,31978,16,4294967297,-28128,-15,-806491297,127];
const v20 = [-6,-1753580390,23989,-256,2013761253,-1,-69];
const v21 = [0.6476119767844933,-2.0];
const v22 = [1.7238796683190766e+308,-2.2250738585072014e-308,1000000000000.0,-1e-15,-564884.778537949,-123.0845695596463,-1.4240817408261063e+308,-1000000.0,0.4227936485118873];
Object.defineProperty(v19, 256, { writable: true, configurable: true, enumerable: true, value: v21 });
for (let i = 0; i < 10; i++) {
    Reflect.apply(v22.shift, v20);
}
