function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1073741824;
    this.a = 1073741824;
    this.c = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.d = a8;
}
const v9 = new F6(v4);
const v10 = new F6(v4);
const v11 = new F6(v4);
class C12 {
    o(a14, a15) {
        const v16 = a14 != a14;
        if (v16) {
            v9[536870912] = this;
        } else {
            function F17(a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a14;
                const o23 = {
                    "call": Error,
                    "defineProperty": Error,
                    "get": Error,
                    "preventExtensions": Error,
                };
                new Proxy(this, o23);
                this.a = v10;
            }
            new F17(this, v11, a15);
            new F17(a14, a15, v11);
            new F17(a14, v9, a15);
        }
        return v16;
    }
}
const v29 = new C12();
const v30 = new C12();
new C12();
const v32 = [NaN,-0.23222502298622594,1.7976931348623157e+308,-9.351222178051288e+307,1000.0,-1e-15,1.0516112167162423e+307,-303.2257241618315,NaN,0.6187436732920885];
[799712.8331046973];
[Infinity,0.39308057210201985,-1.0,-883300.4964045776,-1e-15];
function f35() {
    return f35;
}
try { v3["o"](); } catch (e) {}
[v32,[v29,v5,v11]];
[v30,v9];
const v41 = f35();
const v42 = [f35];
v42 <= [[f35],v41];
