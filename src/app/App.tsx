import { Link } from "react-router-dom";
import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <AppRouter />
        </div>
    )
}

export default App;