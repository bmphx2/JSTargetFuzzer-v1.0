Array()["fill"]();
function f10(a11, a12) {
    const o24 = {
        [5n]: 1.2329501061019647e+307,
        ...a11,
        [5n](a14, a15, a16) {
            function F17(a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a19;
                this.c = this;
            }
            new F17(a14, 5n);
            new F17(a15, -6n);
            const v23 = new F17(a12, -6n);
            return v23;
        },
    };
    return a11;
}
f10(-6n, 1.2329501061019647e+307);
f10(f10(1000000000000.0, 1000000000000.0), 1000000000000.0);
new String(1000);
