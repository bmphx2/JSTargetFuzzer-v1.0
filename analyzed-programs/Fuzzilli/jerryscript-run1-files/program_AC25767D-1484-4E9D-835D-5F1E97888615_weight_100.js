const v0 = [];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a6;
}
new F4(-265.67371434360405, v0);
const v9 = new F4(-265.67371434360405, 0.9608102595953024);
const v10 = new F4(0.0, v9);
v0 & 0.9608102595953024;
let v18;
try { v18 = v10.m(-4294967297n); } catch (e) {}
try { v18(F4, v0, 0.0, "bigint"); } catch (e) {}
v9["bigint"] = -265.67371434360405;
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
