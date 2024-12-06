let v1 = -6;
class C3 {
    static set h(a5) {
        this[a5] = 4294967296;
        v1 = a5;
        let v9;
        try { v9 = C3(a5, "unicode"); } catch (e) {}
        try { a5.m(v9, print, 786.1994808445988, print, "unicode"); } catch (e) {}
        function f12() {
            return "1073741824";
        }
    }
    [4294967296] = v1;
    [786.1994808445988] = 4294967296;
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3(v13, 786.1994808445988);
Symbol.iterator;
const o27 = {
    [v1]() {
        let v22 = 10;
        const o26 = {
            "d": v14,
            [v15]: C3,
            ...v13,
            "b": v15,
            "e": v14,
            next() {
                return this == v22--;
            },
        };
    },
};
