function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4;
    this.a = 4;
    this.e = 4;
}
const v3 = new F0();
const v4 = new F0();
const o5 = {
};
new Proxy(F0, o5);
Math.hypot(7);
Math.random();
Math.round(0.0);
const v15 = Math.log10(0.0);
const v16 = new F0();
function f18() {
    return F0;
}
class C19 extends F0 {
    static get f() {
        const v22 = new f18();
        const v23 = new f18(v16, v22, v22, v16, SyntaxError);
        throw v23;
        SyntaxError[3] = this;
        function F24(a26, a27) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = a27;
            this.f = this;
        }
        new F24(F0, v22);
        new F24(F0, v3);
        new F24(v22, F24);
        return v23;
    }
}
const v31 = new C19();
const v32 = new C19();
const v33 = new C19();
function f34(a35, a36, a37) {
    const o49 = {
        [v32](a39, a40, a41) {
            let v42;
            try { v42 = v3.p(C19); } catch (e) {}
            try {
                super.n();
            } catch(e44) {
            }
            return v42;
        },
        get a() {
            class C47 extends this.constructor {
                static [C19];
                [v4];
            }
            const v48 = new C47();
            return v48;
        },
    };
    return o49;
}
const v50 = f34(v3, v16, v3);
f34(v50, v33, v31);
f34(v33, v3, v31);
o5.c = v4;
f34 >> v31;
v50[0] <<= 0.0;
try { v4["valueOf"](v50, v33, v15, f18); } catch (e) {}
v31[F0] = v50.a;
new Array(2569);
const v66 = new ArrayBuffer(10);
new Int8Array(v66, 9);
