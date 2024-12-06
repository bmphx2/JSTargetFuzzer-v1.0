function f3() {
    return "getUTCDay";
}
class C8 {
    constructor(a10) {
        ("1073741824").match(a10);
    }
}
const v12 = new C8("1073741824");
new C8(v12);
new C8(v12);
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a18;
    this.c = a18;
    this.d = -9223372036854775808;
}
new F15(780346223, -9223372036854775808, 780346223);
new F15(780346223, -9223372036854775808, "boolean");
new F15(-1418113717, 780346223, -9223372036854775808);
new Int8Array(8);
new Uint16Array(16);
new Float64Array(127);
function f35() {
}
function f36() {
    const o42 = {
        get g() {
            new f35();
            return f36;
        },
        "h": f35,
        ...f35,
        "g": f35,
        "a": f35,
        ...f35,
    };
    return o42;
}
f36();
const v44 = f36();
f36();
let v48 = Int32Array;
let v49 = new v48(4096);
new Uint32Array(129);
let v55 = new Int16Array(512);
[,v48,v55,v49] = v55;
v44.g += 4096;
const v57 = Symbol.iterator;
const o66 = {
    [v57]() {
        let v59 = 10;
        const o65 = {
            next() {
                v59--;
                const v63 = v59 == 0;
                const o64 = {
                    "done": v63,
                    "value": v59,
                };
                return o64;
            },
        };
        return o65;
    },
};
