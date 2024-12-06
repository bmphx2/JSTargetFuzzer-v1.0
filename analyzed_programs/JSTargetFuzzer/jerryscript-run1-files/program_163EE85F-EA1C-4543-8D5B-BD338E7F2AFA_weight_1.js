function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.c = a8;
    this.b = a8;
}
const v10 = new F6(v5, v3);
let v11 = new F6(v3, v3);
const v12 = new F6(F6, v5);
class C13 extends F0 {
    p(a15, a16, a17) {
        try { a17(a16, v3, a15, a15); } catch (e) {}
        let v19;
        try { v19 = this.unshift(); } catch (e) {}
        const v20 = a17[F0];
        v11 **= v10;
        try {
            super.valueOf(a17, v19, v3, v20, a15);
        } catch(e22) {
        }
        return F0;
    }
    a = v10;
    static [v11] = F0;
}
const v23 = new C13();
const v24 = new C13();
const v25 = new C13();
function f26(a27, a28, a29) {
    const o47 = {
        m(a31, a32) {
            v10.length = 6;
            const v34 = [this,a31,v23,v11,a31];
            const v35 = [a28,v34,v4,v34,v12];
            v35.__proto__ = [v35,C13,f26,a28];
            try { a29.shift(v4, v35); } catch (e) {}
            function F38(a40, a41, a42, a43) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a42;
                this.c = v5;
                this.b = v25;
            }
            const v44 = new F38(v23, F38, this, a29);
            new F38(C13, v44, a28, v24);
            new F38(a28, a27, v3, a32);
            return a29;
        },
    };
    return o47;
}
f26(v23, v23, v24);
f26(v23, v23, v25);
const v50 = f26(v24, v24, v24);
const v53 = new Uint32Array(181);
let v55 = BigUint64Array;
let v56 = new v55(1);
let v57 = 253;
[v57,,v55,v56] = v53;
try { v55["abs"](181, v57, v55); } catch (e) {}
new Uint16Array(v57);
for (let i75 = (() => {
        function f69(a70, a71) {
            a71 === a70;
            v10[8] = v12;
            return "xX7QN";
        }
        f69(v23, v50);
        return 0;
    })();
    i75 < 2;
    i75++) {
    const v81 = new Function("x");
    v81.name;
}
Function();
