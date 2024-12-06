function f3() {
    return "function";
}
const v4 = [f3];
const v5 = ["object","KF1y",v4,f3,f3];
const v6 = ["KF1y","function","KF1y",v4];
class C7 {
    constructor(a9, a10, a11) {
        let v8 = this;
        Object.defineProperty(v5, "KF1y", { configurable: true, enumerable: true, set: f3 });
        a9 & a9;
        const v13 = v8--;
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a16;
        }
        const v20 = new F14(a11, v5, "object", a10);
        new F14(a11, a10, v20, v4);
        new F14(a9, v5, v13, v6);
    }
    ["function"];
    static d = v4;
    static [v6];
}
const v23 = new C7(v5, v4, "KF1y");
const v24 = new C7(v23, v5, "object");
new C7(v4, v24, "function");
if (v23) {
    function f28() {
        return f28;
    }
    ([-65878576,2147483649,469484235,-15,9007199254740990,-15,-529293684,-128]).some(f28);
    new C7(-9223372036854775807, -9223372036854775807, v5);
} else {
    function f33(a34, a35) {
        const o36 = {
            10000: a35,
        };
        return o36;
    }
    f33(f33(1073741825, 2147483649), 1073741825);
    f33(C7, 2147483649);
}
const v44 = [-4294967296];
try { v44.slice(-4294967297n); } catch (e) {}
