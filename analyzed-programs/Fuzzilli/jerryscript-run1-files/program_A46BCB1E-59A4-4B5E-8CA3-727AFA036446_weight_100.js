const v3 = /a\bc/uygm;
/(?<=)/m;
/c(?:a+){0,0}/i;
class C9 {
    #b;
    static #n(a11, a12, a13, a14) {
        delete this[a12];
        return a14;
    }
    static b = "object";
    static #g;
    static #e;
    e;
    static #d = v3;
}
const v19 = new C9();
new C9();
const v21 = new C9();
const v22 = `valueOf${"object"}d${-65535}acosh${2147483648}p`;
try { v21(v22, v19, v3); } catch (e) {}
Object.defineProperty(v19, "g", { enumerable: true, value: v3 });
const v25 = Symbol.iterator;
const o34 = {
    [v25]() {
        let v27 = 10;
        const o33 = {
            next() {
                v27--;
                const v31 = v27 == 0;
                const o32 = {
                    "done": v31,
                    "value": v27,
                };
                return o32;
            },
        };
        return o33;
    },
};
