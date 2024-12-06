function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.a = a5;
    this.b = a5;
}
new F3(4294967295n);
new F3(-259226165n);
new F3(9n);
new Array(8);
("number").concat("T", "number");
