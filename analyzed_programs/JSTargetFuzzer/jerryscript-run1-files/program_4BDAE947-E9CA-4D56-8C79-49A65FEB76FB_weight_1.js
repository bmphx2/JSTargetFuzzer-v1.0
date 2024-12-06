let v4 = 1557436706;
new Int32Array(2176);
new BigUint64Array(44);
const v17 = new Int32Array(1024);
let v19 = 0;
do {
    function F20(a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = a23;
        this.a = Int32Array;
        this.f = a23;
    }
    new F20("P", 1024, 44);
    new F20("P", 65536, -8);
    new F20("p", -8, 44);
    v19++;
} while (v19 < 7)
const v33 = Symbol.iterator;
const o42 = {
    [v33]() {
        let v35 = 10;
        const o41 = {
            next() {
                v35--;
                const v39 = v35 == 0;
                const o40 = {
                    "done": v39,
                    "value": v35,
                };
                return o40;
            },
        };
        return o41;
    },
};
function f44(a45, a46, a47) {
    v4 = a47;
    for (let v48 = 0; v48 < 32; v48++) {
        const t38 = "NEGATIVE_INFINITY";
        t38["p" + v48] = v48;
    }
    const o51 = {
        "h": "NEGATIVE_INFINITY",
        "c": v17,
        ..."P",
    };
    return o51;
}
f44(65536, "2147483648", "NEGATIVE_INFINITY");
f44(2176, f44(9223372036854775807, f44, "2147483648"), "split");
("p")["split"]("2147483648");
