class C3 {
    constructor(a5, a6) {
        const o7 = {
            __proto__: this,
            "d": 256,
            [a5]: a5,
        };
    }
    b = 0;
    static 1;
    c;
}
const v8 = new C3(1073741824, 0);
const v9 = new C3(0, 1073741824);
const v10 = new C3(0, 0);
const v12 = [[v10,256,256],v10,v9,C3];
const v13 = [1073741824];
let v14;
try { v14 = v13.splice(256, 256); } catch (e) {}
if (1073741824 >= v13) {
    v14 = v8;
    const o16 = {
    };
    new Proxy(v13, o16);
} else {
    v12.length = v14;
    try { v14(v14); } catch (e) {}
}
