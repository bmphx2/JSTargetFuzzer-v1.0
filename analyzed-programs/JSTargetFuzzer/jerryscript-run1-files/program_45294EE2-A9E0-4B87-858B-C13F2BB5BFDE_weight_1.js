function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = F6;
    this.a = a8;
}
new F6(v3);
new F6(v4);
const v11 = new F6(v4);
const v15 = [];
let v16;
try { v16 = v4(); } catch (e) {}
try { v16(v5, 4, v11, 9223372036854775807); } catch (e) {}
[-103425534,1073741823,-536870912,256,8,10];
[-9223372036854775807,37281];
[-4294967297,63184,63811,46138,-65535,0,502];
Object.defineProperty(v15.values(), "e", { writable: true, enumerable: true, value: 119 });
let v24 = -52794;
Math.asinh(-4.0);
Math.tanh(v24++);
