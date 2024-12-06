function f0() {
    const o24 = {
        17: 64575,
        parse(a5) {
            super.a = a5;
            const v6 = f0();
            function F7(a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = 1465597030;
            }
            const v12 = new F7(v6, 1e-15, 1465597030);
            const v13 = new F7(f0, f0, v12, 1e-15, f0);
            new F7(F7, F7, 64575, v13, 64575, 64575);
            return 64575;
        },
        "a": 64575,
        [1465597030]: 64575,
        4: 64575,
        "h": 1e-15,
        "constructor": 1e-15,
        o(a16) {
            const v18 = new Date();
            v18["toISOString"]();
            const o21 = {
            };
            new Proxy(this, o21);
            o21[1465597030] = this;
            return 1465597030;
        },
    };
    return o24;
}
f0();
f0();
f0();
const v38 = [-4294967296];
try { v38.slice(-4294967297n); } catch (e) {}
