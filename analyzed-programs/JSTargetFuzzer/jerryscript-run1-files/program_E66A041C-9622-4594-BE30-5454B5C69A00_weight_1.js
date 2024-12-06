new Error(257);
new Float64Array(10);
new Int16Array(10, 16, Int16Array);
const v19 = [-9007199254740991,54726,1717830925,31978,16,4294967297,-28128,-15,-806491297,127];
const v20 = [-6,-1753580390,23989,-256,2013761253,-1,-69];
const v21 = [0.6476119767844933,-2.0];
const v22 = [1.7238796683190766e+308,-2.2250738585072014e-308,1000000000000.0,-1e-15,-564884.778537949,-123.0845695596463,-1.4240817408261063e+308,-1000000.0,0.4227936485118873];
Object.defineProperty(v19, 256, { writable: true, configurable: true, enumerable: true, value: v21 });
for (let i = 0; i < 10; i++) {
    Reflect.apply(v22.shift, v20);
}
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a33;
    this.f = 46613434;
}
new F28(46613434, 5n, "global", "-16");
new F28(46613434, -7n, "-16", "global");
new F28(46613434, 5n, "global", "global");
if (!("function" == Error)) {
} else {
    function F41(a43, a44, a45) {
        if (!new.target) { throw 'must be called with new'; }
        F41.flags = a45;
    }
    const v46 = new F41(F41, "global", "function");
    new F41(v46, "global", "function");
    new F41(v46, "global", "function");
}
