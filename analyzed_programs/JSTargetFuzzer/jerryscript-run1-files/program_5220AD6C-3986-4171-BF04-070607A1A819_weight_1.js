class C3 {
    toString(a5, a6) {
        const v7 = this & a6;
        const t3 = "d";
        delete t3[this];
        const v9 = super.c;
        a6.length = 0;
        super.a = v7;
        function F11(a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = a5;
            a14 <<= "string";
            try { v9(a6, a5, a15, "string", ..."string"); } catch (e) {}
            const t13 = "string";
            t13.__proto__ = this;
            try { this["toString"](); } catch (e) {}
        }
        const v19 = new F11(536870887, 0, v9);
        new F11(F11, a6, v19);
        const v21 = new F11(v7, F11, "d");
        return v21;
    }
}
new C3();
new C3();
new C3();
const v26 = C3.__proto__;
try { new v26("string", "d"); } catch (e) {}
class C33 extends C3 {
    set h(a35) {
        if (a35) {
        } else {
            const o41 = {
                "maxByteLength": 1000,
            };
            const v43 = new ArrayBuffer(1000, o41);
            new Int32Array(v43);
        }
    }
}
new C33();
new C33();
new C33();
function f58(a59, a60) {
    const o68 = {
        ...a60,
        "c": a60,
        "b": 1073741824,
        "e": a60,
        __proto__: a60,
        [3](a62, a63, a64) {
            try {
                super.m(a60, a62, a64, a62);
            } catch(e66) {
            }
            const v67 = this[8];
            a59 **= -33749;
            return v67;
        },
    };
    return o68;
}
f58(10000, 512);
f58(-33749, f58);
f58(3, f58);
function F72(a74, a75) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a75;
}
new F72(10000, 3);
const v77 = new F72(512, 22165);
new F72(1073741824, 3);
delete v77[1509295508];
Math.sinh(F72);
Math.sinh(10000);
const v89 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v89);
