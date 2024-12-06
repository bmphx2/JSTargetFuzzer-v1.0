new Int16Array(3049);
new Int16Array(6);
new Float32Array(2336);
async function f12(a13, a14) {
    function F15(a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        const v20 = [-6,-1753580390,23989,-256,2013761253,-1,-69];
        const v21 = [1.7238796683190766e+308,-2.2250738585072014e-308,1000000000000.0,-1e-15,-564884.778537949,-123.0845695596463,-1.4240817408261063e+308,-1000000.0,0.4227936485118873];
        for (let i = 0; i < 10; i++) {
            const v23 = v21.shift;
            v20.concat();
            Reflect.apply(v23, v20);
        }
        F15();
    }
    class C27 extends F15 {
        constructor(a29, a30, a31) {
            super();
        }
    }
    const t20 = 2336;
    new t20(C27, F15, a14);
    return C27;
}
f12();
