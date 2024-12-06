const v0 = [268435440,3,-55244,-1];
const v1 = [9007199254740992,2147483647,256,-10];
const v2 = [268435441,-9007199254740992,9,257,-1,65535,-9007199254740990];
function f3(a4) {
    const o15 = {
        "e": v2,
        ...a4,
        "h": a4,
        get d() {
            for (let i7 = -1801458263; i7 < 7; i7++) {
                super.d;
                i7 % v0;
            }
            return v1;
        },
    };
    return o15;
}
const v16 = f3(v0);
const v17 = f3(v0);
const v18 = f3(v2);
class C19 {
    constructor(a21, a22, a23) {
        if (this >= a22) {
            try { this["floor"](this, "floor", v2, "floor"); } catch (e) {}
        } else {
        }
    }
    get g() {
        super.c = this;
        let {"d":v32,} = v18;
        try { v32(this, v0, v32, 2); } catch (e) {}
        return 1073741824;
    }
}
const v34 = new C19(v17, v2, f3);
const v35 = new C19(C19, v2, v34);
new C19(v17, v1, C19);
function f37(a38, a39, a40, a41) {
    const o48 = {
        0: v18,
        "d": a39,
        [a41]: v16,
        "c": a40,
        "e": v16,
        __proto__: a38,
        set h(a43) {
            super.d;
            v2.__proto__ = a43;
        },
        "h": a38,
    };
    return o48;
}
const v49 = f37(v18, v1, v34, v35);
f37(v49, v1, v35, v17);
f37(v49, v1, v35, v2);
const v52 = [];
const v53 = [v52];
try {
    v52.matchAll = v52[127];
    SyntaxError(v53);
} catch(e57) {
}
