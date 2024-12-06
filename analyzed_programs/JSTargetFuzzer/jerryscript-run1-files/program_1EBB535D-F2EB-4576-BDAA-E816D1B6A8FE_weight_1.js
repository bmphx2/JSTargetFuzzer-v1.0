function f3() {
    return 8n;
}
function f4(a5, a6) {
    const o14 = {
        __proto__: a5,
        [a6]: 1254471130n,
        valueOf(a8, a9, a10) {
            const v11 = super.a;
            c = a8;
            let v12;
            try { v12 = v11(a8, 1254471130n, a8); } catch (e) {}
            v12 / v12;
            return v12;
        },
        ...-17784n,
        "d": a6,
        536870889: -17784n,
    };
    return o14;
}
f4(1254471130n, -17784n);
const v16 = f4(1254471130n, 8n);
f4(1254471130n, 8n);
[[f3,v16,v16],8n,[-17784n,v16]];
function f21() {
    return f3;
}
for (let i = 0; i < 5; i++) {
    class C22 {
    }
    eval();
}
