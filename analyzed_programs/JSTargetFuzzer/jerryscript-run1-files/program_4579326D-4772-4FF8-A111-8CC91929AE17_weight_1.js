class C12 {
}
for (let i = 0; i < 5; i++) {
    function f14() {
        const v16 = new BigInt64Array();
        with (v16) {
            try {
            const t0 = 282340487;
            t0();
            } catch (e) {}
        }
        return f14;
    }
    f14();
    const v19 = `
        function f20(a21, a22, a23, a24) {
            a24 = f20;
            function f25() {
                return f20;
            }
            C12.b **= a21;
            return C12;
        }
    `;
    const v27 = eval(v19);
    try { v27("symbol"); } catch (e) {}
    const v29 = v27 + C12;
    let v30;
    try { v30 = C12.isInteger(); } catch (e) {}
    [[v30,v27,"symbol",v29],-2.220446049250313e-16,-2.220446049250313e-16,-497844.6885765608];
    [-766170.6835955278,-497844.6885765608,629.3525745721977,-4.0];
    class C34 {
    }
}
