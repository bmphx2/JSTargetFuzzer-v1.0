function f0() {
}
RangeError();
function f3() {
    const o6 = {
        ...f0,
        "c": f0,
        "f": f0,
        16: f0,
        get h() {
            new f0();
            return f0;
        },
        "a": f0,
        "d": f0,
        ...f0,
    };
    return o6;
}
const v7 = f3();
const v8 = f3();
const v9 = f3();
function f16(a17, a18) {
    const o25 = {
        [v9]: v7,
        "f": v9,
        o(a20, a21, a22) {
            v7[2981580716];
            const v24 = v8;
            return a21;
        },
        "b": v7,
        ...v8,
        "d": a18,
        __proto__: v9,
        "g": a18,
        "c": -2023752541,
        [a18]: v8,
        "c": v9,
        "a": a17,
    };
    return o25;
}
const v26 = f16(v8, v7);
const t44 = 10000n;
t44[9] = v26;
Object.defineProperty(v26, 5, { enumerable: true, get: f0 });
v8.__proto__;
v7[v9] = v7;
v9[10000n];
const v29 = f16(v9, v7);
const v32 = [[f0,f16(v8, v9),v29]];
[v32,v9,v32,f3,v32];
function f34(a35) {
    const o50 = {
        get a() {
            function F37(a39, a40) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v41 = F37(F37, a35);
            this.d = v41;
            this[69] = F37;
            try {
                super.toString(1648527971, v26, this);
            } catch(e43) {
            }
            const o44 = {
                "apply": f34,
                "construct": f16,
                "defineProperty": f16,
                "deleteProperty": f16,
                "get": f0,
                "getOwnPropertyDescriptor": f3,
                "getPrototypeOf": f3,
                "has": f0,
                "isExtensible": f3,
                "ownKeys": f3,
                "preventExtensions": f0,
                "set": f0,
                "setPrototypeOf": f16,
            };
            new Proxy(v41, o44);
            a35 = -2023752541;
            v32["keys"]();
            v41(a35);
            return F37;
        },
    };
    return o50;
}
f34(f34);
[54783,-268435456,46487,11,-1059659455,16,65537];
gc(10000);
