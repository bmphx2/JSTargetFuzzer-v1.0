function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    if (a5) {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            a10(F7);
        }
    }
}
new F3(0.1725881460737685);
new Map();
function f19(a20, a21) {
    const o27 = {
        get c() {
            this.length = 0;
            let v24;
            try {
            const t0 = -2.2250738585072014e-308;
            v24 = t0(-4.489170661254098, a20, this, Map, Map);
            } catch (e) {}
            try {
                super.setMilliseconds(a20, 0, v24, this, a20);
            } catch(e26) {
            }
            return a21;
        },
    };
    return o27;
}
f19(-554317.6649120448, -4.0);
f19(-4.489170661254098, -4.0);
f19(1000000000.0, -2.2250738585072014e-308);
-Infinity != -65537n;
