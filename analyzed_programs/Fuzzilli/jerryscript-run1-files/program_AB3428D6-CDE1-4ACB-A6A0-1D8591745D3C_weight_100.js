const v2 = new Uint8ClampedArray(6);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1256;
    this.c = v2;
    this.a = Uint8ClampedArray;
}
const v8 = new F4(Uint8ClampedArray, 1256);
const v9 = new F4(F4, v8);
const v10 = new F4(1256, v9);
const v12 = new Uint32Array(1256);
function f13(a14, a15, a16) {
    a15 += v12;
    return 6;
}
f13(v8, f13, v9);
const v20 = new Float32Array(529);
try { v8.p("e", F4, v20, v12); } catch (e) {}
v2.__proto__ = v8;
v10.valueOf = f13;
typeof F4 === "number";
try { (536870889).toString(-2112); } catch (e) {}
