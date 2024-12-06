function f6(a7, a8) {
    const o12 = {
        "g": a7,
        "d": 4,
        "b": 9223372036854775807,
        "a": -1471535917,
        "h": a8,
        get b() {
            try {
                super.clz32(this, this, this);
            } catch(e11) {
            }
            return a8;
        },
        "e": a7,
        [-5]: 4,
        "g": -5,
        "a": 4,
        "d": a7,
        ...a7,
    };
    return o12;
}
for (let v13 = 0; v13 < 32; v13++) {
    const t24 = 6;
    t24["p" + v13] = v13;
}
const v16 = f6(4, -5);
const v17 = f6(9223372036854775807, -5);
const v21 = new Int32Array(1192, 960, 1192);
v21.copyWithin(1192, 960);
f6(9223372036854775807, 4);
function f24() {
    return f6;
}
const v25 = [f24,v16,-1471535917,6,f24];
[f24,v25,v16,v25];
[f6,v17,f24];
const v29 = [1000000.0,1.2694373884119616e+308,-Infinity,0.7652992022490531,5.0,-8.644737118571141,1000000.0,0.9075298547528431,-2.220446049250313e-16];
v29.length <<= -62483;
const o36 = {
    "call": f24,
    "get": f6,
    "has": f24,
    "isExtensible": f24,
    "preventExtensions": f6,
    "set": f24,
};
new Proxy(v25, o36);
v29["lastIndexOf"](-1107306622, -54503);
