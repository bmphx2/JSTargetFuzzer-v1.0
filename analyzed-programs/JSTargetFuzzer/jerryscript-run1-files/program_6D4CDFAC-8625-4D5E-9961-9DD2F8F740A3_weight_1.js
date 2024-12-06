const v0 = [7,15,3];
const v1 = [268435440,-565451592,5,5,21246,128,-28267,129];
const v2 = [0,536870912,155550500];
function f3(a4, a5) {
    const o6 = {
        "b": v0,
        [a4]: a4,
        "a": a4,
        "c": v1,
        ...a5,
        ...v1,
        "d": v1,
        "e": a5,
        "g": v2,
        536870887: v2,
        __proto__: v2,
        "h": v0,
        ...v2,
    };
    return o6;
}
f3(v2, v1);
f3(v2, v0);
f3(v2, v1);
function f13(a14, a15) {
    const o24 = {
        4: v2,
        ...a14,
        ...a15,
        "a": f3,
        "c": a14,
        get h() {
            super.h = a15;
            const v21 = new Uint8Array();
            delete v21[-2];
            return v1;
        },
        "g": v1,
    };
    return o24;
}
f13("split", v2);
f13("E", "split");
f13("number", v2);
let v28 = 4087n;
v28 **= v28;
v28 /= -2147483649n;
