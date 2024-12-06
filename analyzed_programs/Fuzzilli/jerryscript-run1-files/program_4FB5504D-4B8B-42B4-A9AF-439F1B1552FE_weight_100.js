function f3() {
    return 268435440;
}
class C7 extends f3 {
    static 3;
    constructor(a9, a10) {
        super();
        const o11 = {
            "g": a10,
            "e": 2.741735812709207,
            "h": 0.0,
        };
        try {
            super.toString();
        } catch(e13) {
        }
    }
}
const v14 = new C7(2.741735812709207, 2.741735812709207);
new C7(0.0, 2.741735812709207);
new C7(0.0, 0.03590660317569294);
for (const v17 of 268435440) {
    v14.e;
    const v19 = new C7(0.03590660317569294, v17);
    Object.defineProperty(v19, 43, { writable: true, configurable: true, enumerable: true, set: f3 });
    C7[268435440] = 2.741735812709207;
    try { v17(); } catch (e) {}
}
