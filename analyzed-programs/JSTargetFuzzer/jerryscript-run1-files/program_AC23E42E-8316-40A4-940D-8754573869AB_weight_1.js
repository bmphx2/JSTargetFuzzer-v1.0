let v0 = [0.5034147662545395,-0.0,277335.0455516502,2.2250738585072014e-308,-1e-15,-2.220446049250313e-16,-695.6277235908826,0.6345565880245521,1000000000.0];
const v1 = [1e-15];
const v2 = [6.579009135687237];
function f3(a4, a5) {
    const o19 = {
        __proto__: a4,
        "h": v1,
        set a(a7) {
            const v8 = [1.0,-3.991147193344659,2.2250738585072014e-308,6.702701311697349e+307,4.0,114442.03405856807,2.0,1000.0];
            const v9 = [0.9614896956243526];
            const v10 = [3.0,-2.2250738585072014e-308,-1000.0,0.6935148512259028];
            a5.__proto__ = v10;
            this[v10] >>>= a7;
            function F11(a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = v1;
                this.c = v9;
                this.a = v8;
            }
            new F11(a4, v1, a4);
            new F11(v10, v2, v1);
            new F11(F11, a5, a5);
        },
    };
    return o19;
}
const v20 = f3(v2, v2);
let v21 = f3(v1, v0);
const v22 = f3(v0, v0);
function f23() {
    return f3;
}
v21 -= v20;
v0[1] <<= -3316;
let v26 = v0[536870912];
v26 /= v21;
v0 %= v1;
class C28 extends f3 {
    g = 75776206;
    p(a30, a31, a32, a33) {
        const v34 = delete a33[257];
        v2.length = 9;
        let v36 = -8048;
        v36++;
        let v38 = +v36;
        Math.max(v38);
        a32++;
        v38--;
        a32 >>>= v34;
        function F42(a44, a45) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = v20;
            this.g = a30;
        }
        const v46 = new F42(9, f23);
        new F42(75776206, v46);
        new F42(75776206, a32);
        return v0;
    }
    static e = v21;
}
const v49 = new C28();
const v50 = new C28();
const v51 = new C28();
v22.__proto__ = v2[9];
function F53(a55, a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a57;
    this.b = a56;
    this.f = v51;
}
new F53(v49, -3316, v50);
new F53(v49, 75776206, v20);
new F53(v51, -3316, v49);
("replaceAll")["startsWith"]();
