function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -5n;
    this.b = 8n;
}
const v7 = new F3(-5n, -5n);
const v8 = new F3(8n, -5n);
const v9 = new F3(9007199254740990n, -5n);
function f10(a11, a12) {
    const o22 = {
        "f": -5n,
        get b() {
            delete a11[v7];
            try { this.throw(-5n, this, a11); } catch (e) {}
            return a11;
        },
        "a": v8,
        n(a17, a18, a19) {
            let v21;
            try { v21 = v7["getFullYear"]("getFullYear", 8n, -5n, v9, "getFullYear"); } catch (e) {}
            return v21;
        },
        __proto__: a11,
        8: -5n,
    };
    return o22;
}
f10(v8, 8n);
f10(v7, -5n);
const v25 = f10(v8, 8n, v9);
function f26() {
    return v25;
}
const v32 = new BigUint64Array(3681);
3681 + v32;
