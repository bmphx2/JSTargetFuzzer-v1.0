function f0() {
}
let v5;
try { v5 = ("function").repeat(-128); } catch (e) {}
const v6 = `
    class C7 {
    }
`;
function f15(a16, a17) {
    const o33 = {
        "g": -1024,
        toString(a19, a20, a21, a22) {
            this.g = 184684708;
            this.__proto__;
            const o30 = {
                "apply": f0,
                "call": f0,
                "construct": f0,
                "deleteProperty": f0,
                m(a25, a26, a27) {
                    eval();
                    return v5;
                },
                "get": f0,
                "getPrototypeOf": f0,
                "has": f0,
                "isExtensible": f0,
                "ownKeys": f0,
                "preventExtensions": f0,
                "set": f0,
            };
            new Proxy(this, o30);
            return a17;
        },
    };
    return o33;
}
f15(-2113624281, 184684708);
f15(184684708, -3335);
f15(11, 11);
const v39 = new Float32Array(1000);
v39.reverse();
