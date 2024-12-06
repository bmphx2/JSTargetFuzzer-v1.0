const v2 = new Date();
const v4 = new WeakMap();
class C8 {
    constructor(a10, a11) {
        for (let v12 = 0; v12 < 32; v12++) {
            this["p" + v12] = v12;
        }
    }
    static {
        v4[-128];
        let {"e":v18,"prototype":v19,} = Date;
        for (let v20 = 0; v20 < 32; v20++) {
            v2["p" + v20] = v20;
        }
    }
}
new C8(-268435456, -4294967296);
new C8(-4294967296, -128);
new C8(-4294967296, -268435456);
-Infinity;
