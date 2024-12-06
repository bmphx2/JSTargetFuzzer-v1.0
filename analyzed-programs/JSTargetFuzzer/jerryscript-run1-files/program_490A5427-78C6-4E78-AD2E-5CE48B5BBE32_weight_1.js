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
new C9("resize", "resize", v8);
class C24 {
    constructor(a26) {
        for (let [i31, i32] = (() => {
                Uint8Array();
                return [0, 10];
            })();
            (() => {
                const v33 = i31 < i32;
                eval(C24);
                return v33;
            })();
            ) {
        }
        const o44 = {
            m(a41, a42, a43) {
                return a41;
            },
        };
        const v45 = o44.m;
        v45.apply(v45);
    }
}
