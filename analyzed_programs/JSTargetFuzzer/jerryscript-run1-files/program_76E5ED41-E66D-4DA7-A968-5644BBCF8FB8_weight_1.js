function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = "-10";
    this.h = "object";
}
const v6 = new F3("-10");
new F3("object");
const v8 = new F3("object");
class C9 extends F3 {
    ["-10"] = F3;
    constructor(a11, a12, a13) {
        super("resize");
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a11;
        }
        new F14(a13, "-10");
        new F14(v8, "-10");
        new F14(v8, "resize");
    }
    ["object"];
}
const v21 = new C9("resize", "resize", v6);
new C9("-10", "resize", v21);
const v23 = [2147483648];
const v26 = ["object","object","object","object","object"];
Object.assign(("object").charCodeAt, v23, v26);
new C9("resize", "resize", v8);
class C30 {
    constructor(a32) {
        for (let [i37, i38] = (() => {
                Uint8Array();
                return [0, 10];
            })();
            (() => {
                const v39 = i37 < i38;
                eval(C30);
                return v39;
            })();
            ) {
        }
        const o50 = {
            m(a47, a48, a49) {
                return a47;
            },
        };
        const v51 = o50.m;
        v51.apply(v51);
    }
}
