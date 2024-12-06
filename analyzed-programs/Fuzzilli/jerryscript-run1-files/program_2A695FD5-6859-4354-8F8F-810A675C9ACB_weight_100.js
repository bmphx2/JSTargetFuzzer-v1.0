function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1073741825;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v4,F0,F0,v4];
[v3,v6,v3,v4,v4];
[v6,v3,v5,v3,v4];
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 8;
    this.d = 4;
}
new F15();
let v19 = new F15();
new F15();
let v22 = "length";
new Date();
const v29 = new Date("undefined");
const t21 = "undefined";
t21[9] = v29;
for (let i32 = 0, i33 = 10;
    i32 < i33;
    (() => {
        const v37 = i32++;
        if ("function" !== v37) {
            const v41 = --v19;
            v37 - v37;
            let v43 = v41 + v41;
            Math.log1p(v43);
            const v45 = ++v43;
            (v37 - v43) ** v45;
        } else {
            const v51 = +255;
            Math.tan(-4294967295);
            ++v22;
            v51 + -4294967295;
            Math.log1p(-4294967295);
            -268435456n | v51;
        }
        i33--;
    })()) {
    -377809839 << -377809839;
    -377809839 >>> -377809839;
    -(-377809839);
    Math.cos("function");
}
