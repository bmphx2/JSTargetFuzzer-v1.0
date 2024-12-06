class C3 {
    static #p(a5) {
        +this;
        +this;
        ("c").length;
        const o11 = {
            "maxByteLength": 64,
        };
        const v13 = new SharedArrayBuffer(64, o11);
        const v15 = new Int16Array(v13);
        return v15;
    }
}
const v16 = new C3();
const v17 = new C3();
const v18 = new C3();
function f19(a20, a21) {
    const o30 = {
        "h": v17,
        o(a23, a24) {
            try {
                super.exec(a20);
            } catch(e26) {
            }
            return "string";
        },
        __proto__: v16,
    };
    return o30;
}
const v31 = f19(5, C3);
const v32 = f19(v31, v18);
const v33 = f19(v16, v32);
function f34() {
    return v32;
}
[v31,"boolean",-653.1238758706335];
[v33,v17,"boolean",v16];
[v17,f34];
Object.defineProperty(C3, 3, { writable: true, enumerable: true, get: f34, set: f34 });
