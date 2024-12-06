function f3(a4, a5) {
    const o6 = {
        [a4]: "p",
        "c": "callee",
        "h": a4,
        [a5]: "toString",
        ...a4,
        "e": "p",
        "a": a5,
        ...a4,
        ...a5,
        ..."callee",
        "g": "p",
    };
    return o6;
}
const v7 = f3("p", "p");
f3("toString", "callee");
const v9 = f3("callee", "toString");
const v13 = [6.464020237461195,-3.587917714276651];
[-5.0,-9.384507218623435,816.9531742703207];
const v15 = [1e-15,3.0,1.7976931348623157e+308,66101.02975609666,-1e-15,253.76794085207212,-3.829380681731902e+307];
for (let v16 = 0; v16 < 52; v16++) {
}
try {
    f3 ** v9;
} catch(e21) {
    v15[4251201416] = e21;
    const o22 = {
        "apply": f3,
        "call": f3,
        "construct": f3,
        "defineProperty": f3,
        "deleteProperty": f3,
        "getOwnPropertyDescriptor": f3,
        "has": f3,
        "isExtensible": f3,
        "ownKeys": f3,
        "preventExtensions": f3,
    };
    new Proxy(v13, o22);
} finally {
    v7[14] = v13;
}
