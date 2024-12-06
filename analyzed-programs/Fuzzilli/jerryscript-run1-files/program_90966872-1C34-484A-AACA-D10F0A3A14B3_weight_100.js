class C3 {
    static set g(a5) {
        const v7 = Symbol.toPrimitive;
        const o10 = {
            [v7]() {
                super.h = this;
                v7[181];
                return 65535;
            },
        };
    }
}
const v11 = new C3();
let v12 = new C3();
const v13 = new C3();
class C17 extends C3 {
    static #d = v13;
    constructor(a19, a20, a21, a22) {
        super();
        for (let i25 = 0, i26 = 10; i25 < i26; i25++, i26--) {
            C3.g ||= a21;
            delete C3[583966366];
            try { new a21(947592897); } catch (e) {}
        }
    }
}
new C17(v13, C3, -9223372036854775808, v12);
const v37 = new C17(C3, v11, v12, C17);
const v38 = new C17(v11, v12, -9223372036854775808, v37);
C17 % v38;
v12 |= C17;
const v42 = v13 & 65535;
-9007199254740992 >>> v42;
Math.max(v42);
Math.trunc(-9007199254740992);
let v46;
try { v46 = v37.m(v37, v11); } catch (e) {}
v13[-1] = v46;
