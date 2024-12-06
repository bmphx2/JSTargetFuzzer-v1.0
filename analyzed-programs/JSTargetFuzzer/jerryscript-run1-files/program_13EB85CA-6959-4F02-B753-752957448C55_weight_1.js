function f3(a4, a5) {
    const o12 = {
        "c": -13,
        ...127,
        255: 127,
        "f": 127,
        "h": -13,
        [a5]: 1438599966,
        m(a7) {
            const v8 = this.h;
            this.toString = v8;
            [a5,this,[v8,127]];
            [a5];
            return a5;
        },
    };
    return o12;
}
const v13 = f3(1438599966, 1438599966);
const v14 = f3(1438599966, 1438599966);
const v15 = f3(1438599966, -13);
function f16(a17, a18, a19, a20) {
    const o34 = {
        "g": a19,
        [a20]: a18,
        "f": a18,
        "b": a20,
        "e": v13,
        ...v13,
        ...v13,
        p(a22, a23, a24, a25) {
            function f26(a27, a28, a29) {
                let v30;
                try { v30 = a27.compile(); } catch (e) {}
                try { a20.m(v30, a22, a17, v15); } catch (e) {}
                try { a18(a29, f3, a17, v13); } catch (e) {}
                return a23;
            }
            f26(f3, -13, 127);
            return -13;
        },
    };
    return o34;
}
f16(f16(f16, f3, f16(v15, v15, 127, v15), v14), f16, v14, v13);
[7.186946901066507e+307];
const v41 = [-9.31420623088279,0.0,1.8519227356350475e+307,257681.74612130644,-4.0];
const v42 = [567586.2194175415,-1000000000.0,-642934.9136023805,-1000000.0];
const o43 = {
    "apply": f16,
    "call": f16,
    "construct": f16,
    "defineProperty": f3,
    "deleteProperty": f3,
    "get": f3,
    "getOwnPropertyDescriptor": f3,
    "isExtensible": f16,
    "ownKeys": f3,
    "preventExtensions": f3,
    "setPrototypeOf": f3,
};
new Proxy(v42, o43);
try {
    v41.length;
} catch(e49) {
}
const v54 = new BigInt64Array(2863);
v54[9] = "2147483647";
