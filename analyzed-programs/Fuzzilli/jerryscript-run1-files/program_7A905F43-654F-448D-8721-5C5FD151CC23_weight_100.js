const v6 = [128,11165];
const v7 = [4,v6];
const v8 = [128,4];
class C9 {
    static [v6];
    static d;
    static {
        v7.length <<= 4;
        v8.__proto__ = this;
        v7[1046503593] %= 4;
        Object.defineProperty(v7, "g", { writable: true, configurable: true, value: this });
    }
    [4] = 4;
    static 268435456 = v6;
}
const v12 = new C9();
new C9();
const v14 = new C9();
v12.e;
v12 & 4;
for (let [,v17,v18,...v19] of v6) {
    v14.valueOf = v19;
    const v21 = Symbol.iterator;
    const o30 = {
        [v21]() {
            let v23 = 10;
            const o29 = {
                next() {
                    v23--;
                    const v27 = v23 == 0;
                    const o28 = {
                        "done": v27,
                        "value": v23,
                    };
                    return o28;
                },
            };
            return o29;
        },
    };
}
