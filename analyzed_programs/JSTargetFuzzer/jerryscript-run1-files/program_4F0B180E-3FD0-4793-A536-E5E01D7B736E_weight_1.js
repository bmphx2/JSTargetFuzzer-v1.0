const v0 = [];
function f1() {
    return v0;
}
const v5 = f1.toPrimitive;
const o9 = {
    [v5]() {
        try {
            function f7() {
            }
        } catch(e8) {
        }
    },
};
function f11(a12, a13) {
    const o24 = {
        m(a15, a16, a17) {
            const o21 = {
                "call": f1,
                "construct": f1,
                "defineProperty": f1,
                "deleteProperty": f1,
                m(a19, a20) {
                    return f1;
                },
                "get": a12,
                "getOwnPropertyDescriptor": f1,
                "getPrototypeOf": f11,
                "has": f1,
                "isExtensible": f1,
                "ownKeys": f1,
                ...a12,
                "preventExtensions": a15,
                "set": f1,
                "setPrototypeOf": f1,
            };
            new Proxy("UT", o21);
            return o21;
        },
    };
    async function f25(a26, a27, a28, a29) {
        return await a26;
    }
    const v32 = [1571794923,1571794923,1571794923,1571794923,1571794923];
    for (let v33 = 0; v33 < 5; v33++) {
        const v34 = 1571794923;
        Object.defineProperty(v32, -2, { writable: true, value: v34 });
    }
    return o24;
}
f11("toString", "toString");
f11(v0, "toString");
f11(f1, "toString");
[-4294967297,-1463084468];
const t50 = [1000000.0,1.2694373884119616e+308,-Infinity,0.7652992022490531,5.0,-8.644737118571141,1000000.0,0.9075298547528431,-2.220446049250313e-16];
t50.toString = RegExp;
let v42 = 58354n;
v42 <<= 39655n;
[0,512,-473635834,1095118025,254549770,1073741823];
[1073741825,-10,65537];
const v47 = [String];
Reflect.apply(String.raw, String, v47);
