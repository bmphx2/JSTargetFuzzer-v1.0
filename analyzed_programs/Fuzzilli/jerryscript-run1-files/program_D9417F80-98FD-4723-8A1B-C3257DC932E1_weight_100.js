class C3 {
    constructor(a5, a6) {
        try {
            super.m(13, this, -4294967296);
        } catch(e8) {
        }
    }
    static #a = 120.32330181882844;
    c = 13;
    3635485359 = -4294967296;
    #h;
}
const v9 = new C3(120.32330181882844, -4294967296);
const v10 = new C3(-4294967296, v9);
new C3(v10, v10);
const v15 = v9.__proto__;
try { v10["o"](-4294967296); } catch (e) {}
("o")[-4.93466220879627e+307 in v10];
for (const v20 of v15) {
    let v21;
    try { v21 = v20(); } catch (e) {}
    try { new v20(v20, v21, v21, v21, v20); } catch (e) {}
    ("o")[1];
}
