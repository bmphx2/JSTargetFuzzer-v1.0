const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v0;
    let o3 = {
        [this]: v0,
    };
    o3 %= o3;
    this[o3] = F1;
}
const v4 = new F1();
const v5 = new F1();
const v6 = new F1();
const o15 = {
    valueOf() {
        super.e = v0;
        let v9;
        try { v9 = v4.keyFor(v0, v5, this, 9007199254740991); } catch (e) {}
        const o13 = {
            valueOf() {
                delete this[this];
                let v12;
                try { v12 = this.valueOf(); } catch (e) {}
                v12.__proto__ = this;
                return v12;
            },
        };
        try { o13.valueOf(o13, o13, o13, o13, o13); } catch (e) {}
        return v9;
    },
};
let v18 = [1584662342,v5];
const v19 = [v4];
[F1,v6,v19];
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a29;
    this.d = a29;
    this.a = o15;
}
const v31 = new F25(v4, v0, v18, v18);
new F25(v5, v31, v19, v0);
new F25(v5, Int16Array, v18, v0);
const v34 = new Int16Array();
let [,,...v35] = v34;
v5[3.0] = v34;
v0.g = v6;
let v39 = NaN / -16247;
--v39;
v18--;
Math.pow(NaN, Int16Array);
-(v18 ^ Int16Array);
--v18;
v35.indexOf(Int16Array);
