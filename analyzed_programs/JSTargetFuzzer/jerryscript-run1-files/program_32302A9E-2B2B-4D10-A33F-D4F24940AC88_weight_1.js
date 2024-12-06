function f0() {
    let v2 = 5;
    const o15 = {
        set c(a5) {
            let v4 = this;
            a5 = v2;
            v4.f;
            let v9 = 26593;
            Math.floor(-v4);
            --v4;
            --v2;
            v9++;
        },
        ..."function",
    };
    return o15;
}
const v16 = f0();
const v17 = f0(f0);
const v18 = f0();
const v19 = [v16,v18];
const v20 = [v19,v19];
const v21 = [v20,f0,v19,v20,v17];
const v23 = new Set();
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v23;
}
new F24(v21, v21, v17);
new F24(v21, v21, v18);
new F24(v21, v21, v16);
const v32 = [5];
try { v32.flatMap(v32); } catch (e) {}
