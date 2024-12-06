class C3 {
    get d() {
        const v5 = super.b;
        try { new v5(v5); } catch (e) {}
        return "NEGATIVE_INFINITY";
    }
    set h(a8) {
        try {
            super.fromCodePoint(a8);
        } catch(e10) {
        }
        this[-8] = this;
    }
}
const v11 = new C3();
const v12 = new C3();
const v13 = new C3();
class C14 extends C3 {
    #e;
    static valueOf(a16, a17) {
        const o18 = {
        };
        new Proxy(this, o18);
        return v12;
    }
    static #c;
    268435440 = C3;
    9;
    static #g = v13;
}
new C14();
const v22 = new C14();
let v23 = new C14();
[1000000.0,-1000.0,-1.7976931348623157e+308,-553260.5281426711,-139666.5147174683,1000000.0,NaN,-1.4226615304551727e+308,-5.222382100854663,2.0];
const v25 = [0.2838737757308216,-1.292809215973272e+308,6.953209436961935e+307,929120.6369335491,1000000000.0,-Infinity,-267718.0735561681,-755.5175575623159];
const v26 = [-496979.725147487,1.0];
const v27 = new C14();
let v28;
try { v28 = v25(v26, v22, v12, 3.0, v26); } catch (e) {}
C3["NEGATIVE_INFINITY"];
C14[v11] = v11;
try { v28(v23, v28, v27, 3.0); } catch (e) {}
const v39 = 268435440 * 2.220446049250313e-16;
v23--;
Math.round(v39);
