function f0() {
}
function f1() {
    const o6 = {
        [f0]: f0,
        "b": f0,
        __proto__: f0,
        get c() {
            let v2 = this;
            v2 %= f1;
            for (let v3 = 0; v3 < 32; v3++) {
                v2["p" + v3] = v3;
            }
            return v2;
        },
        "h": f0,
        "f": f0,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
f1();
const v10 = [-1464344051];
[7,-35837,9007199254740991,-2027163948];
const v12 = [4096,-691585344,16844];
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a15;
    this.h = v7;
    this.a = a16;
}
new F13(v12, v10);
new F13(v10, v8);
new F13(v10, v7);
const v24 = [2036046200,-9223372036854775807,-61646];
const v26 = v24["map"](Array);
try {
    new BigUint64Array(v26);
} catch(e29) {
    const v30 = [v24,v24,v24,v24,v24];
    function f31(a32) {
        return f31;
    }
    class C33 extends f31 {
    }
    for (let i36 = 0, i37 = 10; i36 < i37;) {
        ({"f":i37,"length":i36,...C33} = v30);
    }
} finally {
}
