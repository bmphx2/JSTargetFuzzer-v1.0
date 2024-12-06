function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 23780;
}
new F0();
new F0();
new F0();
let v15 = 0;
while (v15 < 2) {
    const v19 = Symbol.iterator;
    const o28 = {
        [v19]() {
            let v21 = 10;
            const o27 = {
                next() {
                    v21--;
                    const v25 = v21 == 0;
                    const o26 = {
                        "done": v25,
                        "value": v21,
                    };
                    return o26;
                },
            };
            return o27;
        },
    };
    v15++;
}
