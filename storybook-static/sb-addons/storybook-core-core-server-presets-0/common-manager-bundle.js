try {
  (() => {
    var g = __STORYBOOK_API__,
      {
        ActiveTabs: T,
        Consumer: O,
        ManagerContext: f,
        Provider: v,
        RequestResponseError: x,
        addons: n,
        combineParameters: A,
        controlOrMetaKey: k,
        controlOrMetaSymbol: M,
        eventMatchesShortcut: P,
        eventToShortcut: R,
        experimental_MockUniversalStore: w,
        experimental_UniversalStore: C,
        experimental_requestResponse: G,
        experimental_useUniversalStore: I,
        isMacLike: K,
        isShortcutTaken: U,
        keyToSymbol: q,
        merge: B,
        mockChannel: F,
        optionOrAltSymbol: Y,
        shortcutMatchesShortcut: j,
        shortcutToHumanString: E,
        types: H,
        useAddonState: L,
        useArgTypes: N,
        useArgs: z,
        useChannel: D,
        useGlobalTypes: J,
        useGlobals: Q,
        useParameter: V,
        useSharedState: W,
        useStoryPrepared: X,
        useStorybookApi: Z,
        useStorybookState: $,
      } = __STORYBOOK_API__;
    var S = (() => {
        let e;
        return (
          typeof window < 'u'
            ? (e = window)
            : typeof globalThis < 'u'
              ? (e = globalThis)
              : typeof window < 'u'
                ? (e = window)
                : typeof self < 'u'
                  ? (e = self)
                  : (e = {}),
          e
        );
      })(),
      c = 'tag-filters',
      p = 'static-filter';
    n.register(c, (e) => {
      const i = Object.entries(S.TAGS_OPTIONS ?? {}).reduce((t, r) => {
        const [o, u] = r;
        return u.excludeFromSidebar && (t[o] = !0), t;
      }, {});
      e.experimental_setFilter(p, (t) => {
        const r = t.tags ?? [];
        return (
          (r.includes('dev') || t.type === 'docs') &&
          r.filter((o) => i[o]).length === 0
        );
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}
