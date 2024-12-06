for (let v5 = 0; v5 < 32; v5++) {
    const v7 = "p" + v5;
    const t2 = 255;
    t2[v7] = v5;
    class C8 {
        static ["p"];
        ["p"] = v7;
    }
    new C8();
    new C8();
    new C8();
}
try { (-43771).random(-43771, 1589571602); } catch (e) {}
let v13 = -2147483647 || -2147483647;
v13 *= v13;
function f18(a19, a20) {
    const o31 = {
        "g": 2,
        "c": 2,
        "e": a20,
        ...a20,
        n(a22, a23, a24) {
            let v25;
            try { v25 = this.m(2147483649, this, a20); } catch (e) {}
            try { this.defineProperty(v25); } catch (e) {}
            try { a20(); } catch (e) {}
            this.valueOf = v25;
            return a20;
        },
        "h": -43771,
        ...a20,
        "b": a20,
    };
    return a20;
}
f18(2, 1589571602);
f18(255, 255);
f18(255, -2147483647);
const v39 = [Infinity];
const v40 = [-9.40814191403733];
class C41 extends Date {
    constructor(a43, a44) {
        super(a44);
    }
}
new C41(v39, v40);
