function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4;
    this.f = 4;
    this.e = 4;
}
new F0();
new F0();
new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.b = a13;
}
const v14 = new F9("c", F9, "c");
const v15 = new F9("c", "valueOf", v14);
new F9("valueOf", v15, "valueOf");
[848527.9117016301,4.60684275416595,-1.4604807431197891e+308,7.142065547346648e+307,-815401.4942781809,1.7976931348623157e+308,1.1641564027457022e+308,0.7890268681309092,-1.7976931348623157e+308,-4.0];
[-1000000000.0,573125.5303591881,1000000.0,3.0];
[6.280614569593041,674.0740109239048,1.7976931348623157e+308,2.220446049250313e-16,0.6631082900513965,118.90180559760847];
const v21 = Symbol.iterator;
const o30 = {
    [v21]() {
        let v23 = 10;
        const o29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                const o28 = {
                    "done": v27,
                    "value": v23,
                };
                return o28;
            },
        };
        return o29;
    },
};
