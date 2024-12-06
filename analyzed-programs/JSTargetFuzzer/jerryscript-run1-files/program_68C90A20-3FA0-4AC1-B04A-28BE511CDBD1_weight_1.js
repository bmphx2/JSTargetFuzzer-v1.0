function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 5;
    this.f = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f15(a16, a17, a18) {
    const o24 = {
        [a18]: 8n,
        "h": a16,
        [a16]: a17,
        "g": 3.0,
        1073741824: a18,
        8: v3,
        ["B"]: "B",
        "b": a18,
        129: a16,
        "c": -536870912n,
        o(a20, a21) {
            let [] = "number";
            let v22;
            try { v22 = v4.n(); } catch (e) {}
            const v23 = 0.7367368137681508;
            f = v23;
            v22 = 0.7367368137681508;
            return a16;
        },
        "e": -4294967296n,
        ..."B",
    };
    return o24;
}
f15(v5, v3, v4);
f15(v4, v4, v4);
f15(v3, v3, v4);
const v29 = new print();
new Int8Array(v29);
