function f0() {
    let v1 = -34139;
    const o6 = {
        "b": v1,
        "g": Infinity,
        [Infinity]: v1,
        "f": Infinity,
        ...f0,
        __proto__: v1,
        "c": Infinity,
        "a": Infinity,
        "d": v1,
        m(a5) {
            v1 &= a5;
            return this;
        },
        /*
        __proto__: 6,
        */
        [Infinity]: v1,
        [v1]: 6,
        9: Infinity,
    };
    new Int8Array(128);
    new Int8Array(2176);
    new Int32Array(257);
    return o6;
}
const v16 = f0();
const v17 = f0();
const v18 = f0();
const v19 = [f0,f0,v18,v18,v16];
[v16,v19,f0,v19,v18];
[v16,f0,v17,v18,v19];
function f29(a30, a31) {
    const o34 = {
        536870888: a30,
        get e() {
            let v32 = this;
            let v33 = super.a;
            [a30,v33,v32] = v33;
            return v33;
        },
    };
    return o34;
}
const o37 = {
    "apply": f29,
    "deleteProperty": f29,
    "get": f29,
    "getOwnPropertyDescriptor": f29,
    "getPrototypeOf": f0,
    "setPrototypeOf": f0,
};
new Proxy(Proxy, o37);
new Float64Array(3089);
new Uint32Array(3401);
function f44() {
    return f44;
}
const v47 = [-2.2250738585072014e-308];
const v48 = [v47,-1000000.0,0.014069366437978514,v47];
class C49 {
}
C49.bind();
const v51 = [v48];
function f52() {
    return v47;
}
class C53 extends f52 {
}
function* f54(a55, a56, a57, a58) {
    const o65 = {
        "construct": f44,
        "ownKeys": f44,
        ...a57,
        [C53]() {
            ([])["sort"]();
            const o64 = {
                next() {
                    return v51;
                },
            };
        },
    };
    return Proxy(v51);
}
let v68 = 0;
for (let i = 0; i < 5; i++) {
    v68 < 2;
    for (let v71 = 0; v71 < 5; v71++) {
    }
    v68++;
}
