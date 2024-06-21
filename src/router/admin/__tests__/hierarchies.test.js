import router from "../hierarchies";

describe("Admin - Hierarchies Router", () => {
  const routes = [
    { path: "/", method: "get" },
    { path: "/:hierarchyId", method: "get" },
  ];

  it.each(routes)("'$method' exists on $path", ({ method, path }) => {
    const { stack } = router;
    expect(
      stack.some((s) => Object.keys(s.route.methods).includes(method))
    ).toBe(true);
    expect(stack.some((s) => s.route.path === path)).toBe(true);
  });
});