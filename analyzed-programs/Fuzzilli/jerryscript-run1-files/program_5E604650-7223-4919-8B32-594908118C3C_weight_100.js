function f13() {
    return 59040;
}
class C14 extends f13 {
    static o(a16, a17) {
        let v18 = 0;
        do {
            v18++;
        } while (v18 < 3)
        return 512;
    }
    static 117 = 9007199254740991;
    #a = 256;
}
new C14();
const v26 = new C14();
const v27 = new C14();
v27[9007199254740992] = -11;
f13();
v26[65535] = false;
const v34 = Symbol.iterator;
const o43 = {
    [v34]() {
        let v36 = 10;
        const o42 = {
            next() {
                v36--;
                const v40 = v36 == 0;
                const o41 = {
                    "done": v40,
                    "value": v36,
                };
                return o41;
            },
        };
        return o42;
    },
};
