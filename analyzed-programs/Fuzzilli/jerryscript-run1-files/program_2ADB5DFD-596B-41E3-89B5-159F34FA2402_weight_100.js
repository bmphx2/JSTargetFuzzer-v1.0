function f0() {
}
function f4() {
    return "-5";
}
function f5(a6) {
    const o16 = {
        "h": a6,
        [a6]: a6,
        __proto__: a6,
        "f": f0,
        "d": f4,
        [a6](a8, a9, a10, a11) {
            try { a9.slice(a8, "-5"); } catch (e) {}
            const o13 = {
                "defineProperty": f4,
                "deleteProperty": f0,
                "set": f0,
            };
            new Proxy(a8, o13);
            return "7";
        },
    };
    return o16;
}
const v17 = f5("z");
const v18 = f5("7");
f5("-5");
class C20 extends f5 {
    valueOf(a22, a23, a24, a25) {
        const t30 = "z";
        t30[9] = "7";
        f5(..."z", a22, ..."z", v17, a24);
        let v28 = -10865;
        const v31 = "-5" | "-5";
        v28--;
        const v34 = !("-5" && this);
        const v35 = -61120 - a23;
        -v34;
        ~v31;
        return v35;
    }
}
new C20();
new C20();
new C20();
for (let i42 = 0; i42 < 5; i42++) {
    let v48 = 0;
    do {
        v18[268435441] = "-5";
        try { ("z").replaceAll("-5", "-5"); } catch (e) {}
        v48++;
    } while (v48 < 0)
}
