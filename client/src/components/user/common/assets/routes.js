export const routes = [
  {
    path: '//de',
    exact: false,
    breadcrumb: () => <NavLink to="/de">ZARA</NavLink>,
    main: Home
  },
  {
    path: '//:lang/beratung',
    exact: false,
    breadcrumb: activeLanguage =>
      activeLanguage && (
        <NavLink to={`/${activeLanguage.code}/beratung`}>Beratung</NavLink>
      ),
    main: Home
  }
]
