function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 2147483649;
    this.g = 2147483649;
    this.d = 2147483649;
    const o9 = {
        m(a4, a5, a6) {
            try {
                super.deref(a6, this);
            } catch(e8) {
            }
            return F0;
        },
    };
}
const v10 = new F0();
const v11 = new F0();
const v12 = new F0();
const v13 = [v12,v10,v11,v12];
let v15;
try { v15 = v10["toString"](); } catch (e) {}
const v16 = [v11,v10,..."toString",v15,v15];
const t22 = "toString";
t22.toString = v15;
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a20;
    this.f = "toString";
}
const v23 = new F17(v15, v11, v11, v10);
new F17(v11, v10, v10, v10);
new F17(v10, v15, v11, v15);
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v11;
    this.g = v15;
    this.b = v12;
}
new F26(v10, v16);
new F26(v12, v16);
new F26(v15, v10);
const v33 = [v12,v12,v10,v13];
[v12,v13];
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a38;
    this.b = a39;
    this.c = a38;
}
new F36(v12, v23);
new F36(v11, F17);
const v42 = new F36(v11, v10);
class C46 extends F0 {
    static [16];
    toString(a48, a49, a50, a51) {
        -v33;
        const v53 = `
        `;
        +1000;
        const o57 = {
            get f() {
                super.e = "v";
                return this;
            },
        };
        const v59 = (5).constructor;
        a49.includes(1000);
        new Int8Array(v23);
        for (let v64 = 0; v64 < 5; v64++) {
            const v65 = `
                function F66(a68, a69) {
                    if (!new.target) { throw 'must be called with new'; }
                }
            `;
            eval(v65);
        }
        v59(6n);
        let v73 = 0;
        while ((() => {
                function f75(a76) {
                    return a76;
                }
                ([8.048710887091932,-2.2250738585072014e-308,2.220446049250313e-16,-1000.0,6.828082790414911,-Infinity,Infinity,1.6880399539526805e+308,Infinity]).copyWithin();
                return v73 < 4;
            })()) {
            continue;
            const v83 = 1e-15 << 65536;
            v83 >>> 1e-15;
            let v85 = F0 || 65536;
            --F0;
            v85++;
            Math.max(v83);
            v73++;
        }
        return v13;
    }
    constructor(a91, a92, a93, a94) {
        let v95 = 0;
        while (v95 < 7) {
            let v98;
            try { v98 = new a93(a91, a93, a92); } catch (e) {}
            v42[v98];
            v95++;
        }
        super();
        var b = -2147483647;
        return this;
        16 != F0;
    }
    /*
    constructor(a103, a104, a105) {
        super();
        this.__proto__ = F26;
    }
    */
}
new C46();
new C46();
new C46();
let v109 = 409683548n;
let v110 = 41365n;
-2n ^ (v109 *= -(v110--));
