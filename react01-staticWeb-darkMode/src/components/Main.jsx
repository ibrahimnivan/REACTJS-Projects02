export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main-title">Fun Facts About React</h1>
      <ul className="main-facts">
        <li>Was First Released in 2013</li>
        <li>Was originally Created by Jordan Walke</li>
        <li>Has Well Over 100K stars on GitHub</li>
        <li>is Maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  ) 
}