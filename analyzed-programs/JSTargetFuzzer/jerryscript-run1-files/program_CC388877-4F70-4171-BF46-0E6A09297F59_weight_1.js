function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 10000;
    this.e = a5;
}
new F3(4096);
new F3(10000);
new F3(10000);
let v12 = 6;
for (;
    (() => {
        const v13 = v12--;
        class C14 {
        }
        return v13;
    })();
    ) {
    function f15() {
        for (let i17 = 0;
            (() => {
                const o18 = {
                };
                return i17 > 7;
            })();
            ) {
        }
        return v12;
    }
}
