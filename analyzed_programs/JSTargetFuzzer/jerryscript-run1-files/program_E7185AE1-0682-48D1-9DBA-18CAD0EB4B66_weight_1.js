function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
    this.a = a6;
}
new F4(2147483647, 2);
const v9 = new F4(3, 3);
const v10 = new F4(3, 2147483647);
function f14(a15, a16, a17, a18) {
    let v19 = 0;
    while (v19 < 5) {
        v19 = 2147483647;
        a18.length = 2;
        v19++;
    }
    const o47 = {
        29: "CO",
        valueOf(a25, a26) {
            function f27(a28, a29) {
                a15[this] = a17;
                const v34 = 512n | "iH5";
                const v35 = [512n,v34,v34,F4,"20788"];
                [v35,"codePointAt",v35,v35,a17];
                [a25,a26,a26];
                return a18;
            }
            return f27(a25, v10);
        },
        "f": "codePointAt",
        n(a42, a43, a44, a45) {
            new F4(a43, a16);
            a17.valueOf = f0;
            return "f";
        },
        "c": "codePointAt",
    };
    return o47;
}
f14("f", f14("CO", f0, 2, 2147483647), 2, 2147483647);
f14("CO", v9, 2147483647, 3);
const v54 = new Uint8Array(10);
v54.some(RangeError);
