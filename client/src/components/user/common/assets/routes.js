export const routes = [
  {
    path: '/user/de',
    exact: false,
    breadcrumb: () => <NavLink to="/user/de">ZARA</NavLink>,
    main: Home
  },
  {
    path: '/user/:lang/beratung',
    exact: false,
    breadcrumb: activeLanguage =>
      activeLanguage && (
        <NavLink to={`/user/${activeLanguage.code}/beratung`}>Beratung</NavLink>
      ),
    main: Home
  }
]
