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
    class C17 {
        constructor(a19) {
            ("1073741824").match();
            try { new C17(); } catch (e) {}
        }
    }
    new C17();
    this.c = a15;
    this.h = v7;
    this.a = a16;
}
new F13(v12, v10);
new F13(v10, v8);
new F13(v10, v7);
const v31 = [2036046200,-9223372036854775807,-61646];
const v33 = v31["map"](Array);
try {
    new BigUint64Array(v33);
} catch(e36) {
    const v37 = [v31,v31,v31,v31,v31];
    function f38(a39) {
        return f38;
    }
    class C40 extends f38 {
    }
    for (let i43 = 0, i44 = 10; i43 < i44;) {
        ({"f":i44,"length":i43,...C40} = v37);
    }
} finally {
}
