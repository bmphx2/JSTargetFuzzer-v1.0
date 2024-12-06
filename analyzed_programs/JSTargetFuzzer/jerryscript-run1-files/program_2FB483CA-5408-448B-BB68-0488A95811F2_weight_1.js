function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.a = -12;
    this.f = f0;
}
const v7 = new F4(f0);
const v8 = new F4(-1771796660);
const v9 = new F4(F4);
function f10(a11, a12, a13) {
    const o27 = {
        "h": a13,
        "e": a13,
        [a12]: v8,
        toString(a15, a16, a17) {
            let v20 = 2147483648;
            a11 - a15;
            const v22 = v20 << a15;
            -(v20++);
            Math.sinh(v22);
            this.log(a11);
            return a12;
        },
    };
    return o27;
}
const v28 = f10(-11, -11, -1771796660);
const v29 = f10(-1771796660, f0, -11);
const v30 = f10(-12, -1771796660, -1771796660);
function f31(a32, a33, a34) {
    const o45 = {
        ...a34,
        5: v30,
        "f": v7,
        3810: v9,
        "c": v29,
        ...v28,
        "h": v7,
        "g": a32,
        n(a36, a37, a38, a39) {
            const v40 = -a39;
            const v42 = [a34,a34,v40,v8,v40];
            return Reflect.apply(v28.toString, a32, v42);
        },
    };
    return o45;
}
f31(v28, -12, -12);
f31(v29, -12, -1771796660);
f31(v29, -1771796660, -1771796660);
const v50 = ("unicode").__proto__;
for (let v51 = 0; v51 < 5; v51++) {
    v50 + v51;
}
let v53 = 0n;
v53 &= v53;
