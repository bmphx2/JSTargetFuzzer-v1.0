const v0 = [];
class C4 {
    get b() {
        const v7 = Symbol.iterator;
        const o16 = {
            [v7]() {
                let v9 = 10;
                const o15 = {
                    next() {
                        v9--;
                        const v13 = v9 == 0;
                        const o14 = {
                            "done": v13,
                            "value": v9,
                        };
                        return o14;
                    },
                };
                return o15;
            },
        };
        return 4294967296n;
    }
}
new C4();
new C4();
new C4();
v0 % 24591;
for (let v30 = 0; v30 < 32; v30++) {
    C4["p" + v30] = v30;
}
var f = v0;
