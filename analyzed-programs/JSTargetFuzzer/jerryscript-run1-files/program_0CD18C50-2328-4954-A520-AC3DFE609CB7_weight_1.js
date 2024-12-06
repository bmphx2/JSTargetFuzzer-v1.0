class C3 {
    constructor(a5, a6) {
        const o7 = {
        };
        new Proxy(this, this);
        try { o7.getFloat32(a6, a5, o7, o7); } catch (e) {}
    }
    c;
    get a() {
        C3.c |= 4;
        return -65536;
    }
}
new C3(C3, 4);
new C3(10, 10);
new C3(4, 4);
new WeakSet();
function f26() {
}
const v30 = [-1000000.0,f26,-807.6596022618603,0.014069366437978514];
const v31 = [v30,0.014069366437978514,0.014069366437978514,v30];
const v32 = [v31,10,-807.6596022618603];
function* f36(a37, a38, a39, a40) {
    let v41;
    try { v41 = a39.padStart(a37, "object"); } catch (e) {}
    const o42 = {
        "construct": f26,
        "ownKeys": a39,
        "preventExtensions": f26,
    };
    new Proxy(v32, o42);
    yield* "dotAll";
    return v41;
}
f36(-807.6596022618603, "U7O", "U7O", v31);
