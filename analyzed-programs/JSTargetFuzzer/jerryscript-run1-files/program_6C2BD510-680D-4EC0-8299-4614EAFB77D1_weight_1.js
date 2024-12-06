function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 16;
    this.h = 16;
    this.c = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = v4.constructor;
class C6 extends v5 {
    1 = v5;
    static f;
}
const v7 = new C6();
const v8 = new F0();
try { v7["toString"](v5, "toString"); } catch (e) {}
F0 + v3;
v5[10] = v5;
let v12;
try { v12 = v3.p(v7, v3, C6); } catch (e) {}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a15;
    this.g = F0;
}
const v16 = new F13(v8);
const v17 = new F13(v3);
const v18 = new F13(v8);
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v4;
    this.b = a22;
    this.c = v18;
}
new F19(F19, v17, v8);
new F19(v4, v17, v3);
new F19(v4, v16, v8);
const v32 = new Uint32Array(181);
let v34 = BigUint64Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
try { v34["abs"](181, v36, v34); } catch (e) {}
new Uint16Array(v36);
for (let i49 = 0;
    (() => {
        function f51() {
            return i49;
        }
        function F52(a54, a55, a56, a57) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a57;
            this.a = "xX7QN";
        }
        const v58 = new F52("xX7QN", 536870889, "2147483648", f51);
        new F52(v12, 181, v5, v58);
        new F52("xX7QN", i49, "xX7QN", undefined);
        return i49 < 2;
    })();
    i49++) {
    const v66 = new Function("x");
    v66.name;
}
Function();
