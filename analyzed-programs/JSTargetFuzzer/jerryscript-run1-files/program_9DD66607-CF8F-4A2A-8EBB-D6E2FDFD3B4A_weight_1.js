function f3(a4, a5) {
    const o13 = {
        [1073741823](a7, a8) {
            this[a7];
            const o10 = {
            };
            const v12 = new Proxy(Proxy, o10);
            return v12;
        },
        "h": 5263,
        "g": a5,
        __proto__: a5,
    };
    return o13;
}
f3(5263, 1073741823);
const v15 = f3(5263, 255);
const v16 = f3(255, 5263);
function f17() {
    return f3;
}
function f18(a19, a20, a21) {
    const o29 = {
        8: 1073741823,
        "a": 255,
        1696110214: a20,
        "b": f17,
        __proto__: 5263,
        set g(a23) {
            let v22 = this;
            let v25 = -973198791;
            let v26 = --v22;
            v26++;
            v25++;
        },
    };
    return o29;
}
f18(5263, v16, 1073741823);
f18(5263, v16, 255);
f18(5263, v15, 1073741823);
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
}
const v38 = new F33();
String(v38);
