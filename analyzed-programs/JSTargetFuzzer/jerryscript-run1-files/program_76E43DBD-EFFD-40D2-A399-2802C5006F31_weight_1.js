function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9223372036854775807;
    this.f = -9223372036854775807;
}
new F3(-9223372036854775807);
new F3(-11);
new F3(-9223372036854775807);
function f9() {
    return -11;
}
let v13 = 10;
for (;
    v13--;
    (() => {
        let v15 = 0;
        while (v15 < 2) {
            for (let v18 = 0; v18 < 5; v18++) {
            }
            v15++;
        }
    })()) {
}
