function f0() {
}
class C1 {
    constructor() {
        Object.defineProperty(this, "b", { enumerable: true, get: f0 });
        this[8] = this;
        function F3(a5) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = f0;
            this.a = a5;
            this.c = f0;
        }
        const v6 = new F3(F3);
        const v7 = new F3(v6);
        new F3(v7);
    }
    c = f0;
}
new C1();
new C1();
new C1();
new Array(7);
class C18 {
    #valueOf(a20, a21, a22) {
        let v24 = 364544552;
        Math.abs(a22);
        const v26 = a22 / v24;
        const v27 = v24++;
        -v27;
        v27 << v27;
        -a22;
        +v27;
        return v26;
    }
    2600;
}
new C18();
const v33 = new C18();
new C18();
v33[949];
~101939956;
const v41 = -1024 | -1024;
-(-1024);
Math.log1p(v41);
const v45 = Symbol.iterator;
const o54 = {
    [v45]() {
        let v47 = 10;
        const o53 = {
            next() {
                v47--;
                const v51 = v47 == 0;
                const o52 = {
                    "done": v51,
                    "value": v47,
                };
                return o52;
            },
        };
        return o53;
    },
};
