function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 65536;
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f6() {
        return f6;
    }
}
const v7 = new F0();
const v8 = new F0();
const v9 = new F0();
function f10(a11, a12) {
    const o26 = {
        set c(a14) {
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a14;
            }
            new F15(F15, v9);
            new F15(v8, a14);
            try {
            } catch(e21) {
                function f22() {
                    return e21;
                }
            }
            new F15(F15, a12);
        },
        "a": f10,
        p(a25) {
            switch (a12) {
            }
            return this;
        },
        __proto__: a12,
        "c": v7,
        ...v7,
        "e": a12,
        "b": a12,
        [a12]: a11,
        "g": a11,
        "b": a11,
        ...a12,
    };
    return o26;
}
f10(v9, v8);
f10(v8, v7);
f10(v8, v8);
[-23321,-33080,65535,-268435456,-1297011479];
[-256,65536,536870887,-9223372036854775808,-4096,-16,-13,52054];
const v38 = new Int16Array(255);
Reflect.apply(("toString").trimLeft, v38);
[2527,535,16,-7282,1,-2147483648,47017];
const v43 = [-9007199254740991,54726,1717830925,31978,16,4294967297,-28128,-15,-806491297,127];
const v44 = [-6,-1753580390,23989,-256,2013761253,-1,-69];
const v45 = [0.6476119767844933,-2.0];
const v46 = [1.7238796683190766e+308,-2.2250738585072014e-308,1000000000000.0,-1e-15,-564884.778537949,-123.0845695596463,-1.4240817408261063e+308,-1000000.0,0.4227936485118873];
Object.defineProperty(v43, 256, { writable: true, configurable: true, enumerable: true, value: v45 });
for (let i = 0; i < 10; i++) {
    Reflect.apply(v46.shift, v44);
}
