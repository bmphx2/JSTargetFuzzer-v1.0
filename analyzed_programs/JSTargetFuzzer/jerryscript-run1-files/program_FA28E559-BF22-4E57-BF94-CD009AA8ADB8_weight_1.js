function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -1;
    this.e = a5;
    let v7 = 0;
    while (v7 < 3) {
        ~1000.0;
        Math.expm1(!this);
        this >> -4096;
        Math.atan(1000.0);
        v7++;
    }
}
const v19 = new F3(F3, 13);
const v20 = new F3(v19, -1024);
const v21 = new F3(13, v20);
function f22(a23, a24, a25, a26) {
    const o36 = {
        "b": -1,
        "d": a25,
        108: v21,
        set g(a28) {
            const v29 = v19 || 13;
            const v31 = [v29,[a24,this,v29],v29];
            this in v31;
            const v33 = a26 && v21;
            try { a28(v31, a23, a25, v19, v33); } catch (e) {}
            Object.defineProperty(v19, "e", { configurable: true, set: f22 });
            Object.defineProperty(this, "d", { writable: true, configurable: true, enumerable: true, get: f22, set: f22 });
            [v29,v31,v31];
        },
        "e": a23,
    };
    return o36;
}
f22(13, v20, v21, v20);
f22(13, v20, v20, 13);
f22(-1024, v20, v21, -1);
const v43 = new Int16Array(255);
Reflect.apply(("toString").trimLeft, v43);
