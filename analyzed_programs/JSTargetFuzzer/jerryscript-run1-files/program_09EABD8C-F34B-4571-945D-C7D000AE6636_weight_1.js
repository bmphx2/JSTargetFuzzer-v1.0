const v0 = [4294967295,10,8];
const v1 = [-3,-4096,1073741824,0,1589439322,-4294967296,268435441,13];
[922434631,268435441,8,-1629738224,268435440];
new Array(2241);
let v11 = 10;
function f12() {
    return v1;
}
class C13 extends f12 {
    o(a15, a16, a17) {
        [,v11,...a17] = v0;
        const o18 = {
            "call": f12,
            "construct": Array,
            "deleteProperty": f12,
            "get": f12,
            "getOwnPropertyDescriptor": f12,
            "has": Array,
            "isExtensible": Array,
            "ownKeys": Array,
            "preventExtensions": Array,
            "set": Array,
        };
        const v20 = new Proxy(v1, o18);
        return v20;
    }
}
new C13();
new C13();
new C13();
let v25 = -1;
const v27 = [v25,999197796,v25,999197796,999197796];
let v28 = [v25,v27,-1491302985,v27];
[v28,v28];
class C33 {
    valueOf(a35, a36) {
        let v37;
        try { v37 = new a36(a35, -1491302985, this); } catch (e) {}
        ({"b":v28,"e":a35,} = v37);
        function f38(a39, a40, a41, a42) {
            const o49 = {
                m(a44, a45, a46) {
                    try {
                        super.deref(a46, a42);
                    } catch(e48) {
                    }
                    return a40;
                },
            };
            return o49;
        }
        Reflect.apply(f38().m);
        this[512] = 512;
        return a35;
    }
    static n(a55, a56, a57, a58) {
        try {
            super.p();
            function F60() {
                if (!new.target) { throw 'must be called with new'; }
                this.b = -9;
            }
            const v63 = new F60();
            const o65 = {
                ...v63,
                get b() {
                    return this;
                },
            };
        } catch(e66) {
        }
        return this;
    }
}
const v67 = new C33();
new C33();
const v69 = new C33();
v25 >>= -1491302985 >>> v25;
async function f71(a72, a73) {
    await 512;
    return C33;
}
const v76 = f71(v69, 1403512483);
delete v67[250];
v76[-1491302985];
