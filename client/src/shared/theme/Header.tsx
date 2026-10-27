import '../../sass/theme.scss';

export default function Header() {
  return (
    <section id="header-wrapper">
      <div id="header-content">
        <h1>Lately</h1>
        <nav>
          <ul>
            <li>Activities</li>
            <li>Categories</li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}