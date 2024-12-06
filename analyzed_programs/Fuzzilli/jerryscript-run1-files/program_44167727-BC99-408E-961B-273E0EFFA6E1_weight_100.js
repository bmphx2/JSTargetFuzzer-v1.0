const v0 = [-37492,2147483647,7,-4096,-5,-4294967295,-10];
let v1 = [33921,64435,4294967297,9007199254740992,1367374583,-4294967296,10,0];
let v2 = [93473140,5,12,1,1073741824,9007199254740991,-27594,-9007199254740991,-1024,1182949026];
class C6 {
    constructor(a8, a9, a10, a11) {
        v1 = a8;
        super.e = a8;
        const v12 = v1 | a11;
        try { a8.some(v12, v1); } catch (e) {}
    }
    n(a15, a16, a17, a18) {
        return "128";
    }
    static #f = v0;
    static #a = v0;
}
let v22 = new C6(v2, v2, 319951235, v0);
let v23 = new C6(v0, v0, -4294967297, v2);
const v24 = new C6(v2, v0, -49330, v0);
class C25 extends C6 {
    constructor(a27, a28) {
        super(v0, v1, -49330, v1);
        v22 = (v23 = this);
        super.n(v1);
        delete C6[8];
        super.d;
        v23[2779];
    }
    static #o(a34, a35, a36) {
        const v38 = a35["values"](..."values", ...a36, 319951235, ...a34, ..."values");
        a35[2841];
        for (let v40 = 0; v40 < 32; v40++) {
            v38["p" + v40] = v40;
        }
        return a36;
    }
}
new C25(v22, C6);
const v44 = new C25(v24, C25);
new C25(v44, v23);
[,,,...v2] = v0;
const v46 = v22 - v2;
try { v2(v24, v23, -49330, v46, v1); } catch (e) {}
function f48(a49) {
    return a49;
}
class C50 extends f48 {
    #n(a52, a53, a54) {
        let v55;
        try { v55 = a54(); } catch (e) {}
        Object.defineProperty(this, v44, { writable: true, configurable: true, value: v55 });
        return v46;
    }
}
