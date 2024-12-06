function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1024;
}
new F0();
new F0();
const v5 = new F0();
let v8 = -2.0;
class C9 extends F0 {
    #o(a11, a12) {
        const v13 = super.d;
        v8 = v13;
        return v13;
    }
    #p(a15, a16) {
        a16.g = F0;
        return v5;
    }
    static 9;
}
new C9();
new C9();
new C9();
let v20 = 0;
do {
    new F0();
    const v23 = Symbol.iterator;
    const o32 = {
        [v23]() {
            let v25 = 10;
            const o31 = {
                next() {
                    v25--;
                    const v29 = v25 == 0;
                    const o30 = {
                        "done": v29,
                        "value": v25,
                    };
                    return o30;
                },
            };
            return o31;
        },
    };
    v20++;
} while (v20 < 9)
