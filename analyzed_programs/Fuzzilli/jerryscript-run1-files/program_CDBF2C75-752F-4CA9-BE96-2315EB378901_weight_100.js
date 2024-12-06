function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 5;
    this.e = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v5,v5,F0,F0];
const v7 = [v6];
[v7,F0,v3,v4,v5];
class C9 extends F0 {
    static f;
    valueOf(a11, a12, a13, a14) {
        [55835];
        const v16 = [-2147483649,-15,482608209,-13,268435456,-122812193];
        [-9007199254740991,64];
        try {
            super.setUTCMinutes(v16, v6);
        } catch(e19) {
        }
        return a14;
    }
    g = v5;
    #g = F0;
    h;
    static [v7] = v7;
}
const v20 = new C9();
new C9();
new C9();
function f23() {
    return F0;
}
class C24 {
    2147483647;
    static toString(a26, a27) {
        let v25 = this;
        v25 = a27;
        [1000000000.0,NaN,-463.9525045978967,116.96684660452934,-5.0,672.1061820689138,-1.0,-77495.91227548476,1.271101914970704e+308,0.23382463842047752];
        [0.0,-2.220446049250313e-16,903.1383375015625,-751.0106380749528];
        [2.0];
        return v20;
    }
    o(a32, a33) {
        const v35 = Symbol.iterator;
        const o44 = {
            [v35]() {
                let v37 = 10;
                const o43 = {
                    next() {
                        v37--;
                        const v41 = v37 == 0;
                        const o42 = {
                            "done": v41,
                            "value": v37,
                        };
                        return o42;
                    },
                };
                return o43;
            },
        };
        return v6;
    }
}
new C24();
new C24();
const v47 = new C24();
v47[v20] = v47;
async function f48(a49, a50) {
    const o51 = {
        "setPrototypeOf": f23,
    };
    new Proxy(v3, o51);
    await a50;
    return v47;
}
f48(v3, v47);
