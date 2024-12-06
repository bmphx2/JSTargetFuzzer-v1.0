function f12(a13, a14, a15, a16) {
    const o25 = {
        get f() {
            super.e = -9223372036854775808;
            const o18 = {
            };
            const v20 = new Proxy(this, o18);
            try { a14(o18, v20, v20); } catch (e) {}
            const v24 = new Array(11);
            return v24;
        },
        __proto__: -878639.3254753107,
        [31566]: 1406736436,
    };
    return o25;
}
f12(-2147483648, -2147483648, 1406736436, 5.98485153896142);
f12(-26328, 1000000000000.0, -9223372036854775808, 5.98485153896142);
f12(-9223372036854775808, 1000000000000.0, -26328, 5.98485153896142);
function f29(a30) {
    const o38 = {
        get a() {
            function F32(a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v36 = F32(F32, F32);
            v36(v36);
            return F32;
        },
    };
    return a30;
}
f29(f12);
[54783,-268435456,46487,11,-1059659455,16,65537];
gc(10000);
