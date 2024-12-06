function f0() {
    const o16 = {
        "h": -1e-15,
        ["3ugx"]: "3ugx",
        ["3ugx"](a5, a6) {
            const v7 = +"3ugx";
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = v7;
                this.a = "129";
            }
            new F8(a5, -1e-15, this);
            const v14 = new F8("129", v7, this);
            new F8("129", v14, a5);
            return "129";
        },
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
class C20 extends f0 {
    #p(a22, a23) {
        a22[a23] **= a23;
        return v18;
    }
    static [f0];
    valueOf(a25, a26) {
        function F27(a29, a30, a31, a32) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = this;
            this.a = a29;
        }
        const v33 = new F27(v18, v19, a26, a25);
        new F27(v19, a26, v18, v33);
        const v35 = new F27(v19, a25, a26, v19);
        return v35;
    }
}
const v36 = new C20();
const v37 = new C20();
const v38 = new C20();
let v40 = -9007199254740992n;
function F42(a44, a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a45;
}
const v47 = new F42(v37, v19, v36);
const v48 = new F42(v19, v38, v19);
new F42(v19, v38, v17);
v40 = -1073741824n;
v47[2] = v48;
v37 ** f0;
const o51 = {
    "apply": f0,
    "construct": f0,
    "getOwnPropertyDescriptor": f0,
    "ownKeys": f0,
    "setPrototypeOf": f0,
};
new Proxy(v48, o51);
