function f3() {
    return 8n;
}
function f4(a5, a6) {
    const o17 = {
        __proto__: a5,
        [a6]: 1254471130n,
        valueOf(a8, a9, a10) {
            const v11 = super.a;
            c = a8;
            for (let v12 = 0; v12 < 32; v12++) {
                a6["p" + v12] = v12;
            }
            let v15;
            try { v15 = v11(a8, 1254471130n, a8); } catch (e) {}
            v15 / v15;
            return v15;
        },
        ...-17784n,
        "d": a6,
        536870889: -17784n,
    };
    return o17;
}
const v18 = f4(1254471130n, -17784n);
const v19 = f4(1254471130n, 8n);
const v20 = f4(1254471130n, 8n);
const v21 = [f3,v19,v19];
const v23 = [v21,8n,[-17784n,v19]];
function f24() {
    return f3;
}
v18 in v21;
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a29;
    this.h = a28;
}
const v30 = new F26(v21, v23);
new F26(v30, v21);
new F26(F26, v21);
for (let i = 0; i < 5; i++) {
    class C33 {
    }
    let v38;
    try { v38 = new C33(f3, 1900415449, ...-17784n, v20); } catch (e) {}
    v20[v38] = 1900415449;
    eval();
}
