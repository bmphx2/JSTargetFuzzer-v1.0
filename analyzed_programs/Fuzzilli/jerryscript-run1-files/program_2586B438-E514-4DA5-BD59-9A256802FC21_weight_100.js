const v3 = ["-1"];
const v4 = ["assign",v3,"KWVqH"];
const v5 = [v4,v4,v3];
class C6 {
    #b;
    7 = "assign";
    65536 = "KWVqH";
    6 = "-1";
    o(a8, a9, a10) {
        v3[a10] &&= v4;
        [a10,,a10] = v3;
        return a10;
    }
    static [v5];
    static 2297 = v5;
    ["-1"] = v5;
}
const v11 = new C6();
const v12 = new C6();
let v13 = new C6();
class C14 extends C6 {
    constructor(a16, a17, a18) {
        super();
        const v19 = !a17;
        try { new a16(v5, v11, v19); } catch (e) {}
        let {"b":v21,} = C6;
        const t26 = "KWVqH";
        delete t26[536870887];
    }
    static #m(a24, a25) {
        v13 = v12;
        try { a25("-1", this, "KWVqH", "KWVqH", v5); } catch (e) {}
        return this;
    }
}
const v27 = new C14(v11, C14, "assign");
new C14(v5, v27, "-1");
new C14("assign", v27, "KWVqH");
for (let v30 = 0; v30 < 32; v30++) {
    C6["p" + v30] = v30;
}
try { C14(v3, v12, "KWVqH"); } catch (e) {}
"-1" instanceof C6;
