class i {
  static move(s, c, a = []) {
    s.classList.forEach((t) => a.includes(t) && c.classList.add(t)), s.classList.remove(...a);
  }
}
export {
  i as Classname
};
