const v3 = [2147483648,2147483648];
const v4 = [6];
const v5 = [v4];
function f6(a7, a8, a9) {
    const o17 = {
        __proto__: a8,
        set h(a11) {
            v4[3] *= a11;
            const o16 = {
                valueOf() {
                    const v14 = a8 != a9 ? a8 : a9;
                    try { a11(v14, a7, v14, v14, a11); } catch (e) {}
                    return 6;
                },
            };
        },
        "c": a9,
        ...v5,
        "h": a9,
    };
    return o17;
}
const v18 = f6(6, v4, 6);
const v19 = f6(2147483648, v5, 2147483648);
const v20 = f6(2147483648, v5, 2147483648);
const v21 = [v18,v20,v3,v5,f6];
[v19,v20];
[v18];
[1000,1656315280];
v21.__proto__;
const o26 = {
    "deleteProperty": f6,
    "preventExtensions": f6,
    "set": f6,
    "setPrototypeOf": f6,
};
new Proxy(v3, o26);
[-1,128,6,536870889,37463,-1,-5,11];
[-478966501,1073741824,4294967295,-18210,-4294967297,9,536870887,9007199254740991,0];
function f31() {
    return f31;
}
const v33 = new Map();
v33["forEach"](f31);
