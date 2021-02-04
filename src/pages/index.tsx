import { createUseStyles } from 'react-jss';
import Docs from '../wrappers/Docs';

const useStyles = createUseStyles({
  container: {
    marginTop: 100,
    textAlign: 'center',
  },

  header: {
    fontSize: 24,
    lineHeight: 1.25,
  },
});

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
  <Docs>
    <div className={classes.container}>
      <header className={classes.header}>
        Rasterize HTML
      </header>
      <div>

      </div>
      <footer>
        <a href="https://github.com/jacobsfletch/rasterize-html">
          GitHub
        </a>
        {`© ${new Date().getFullYear()}`}
      </footer>
    </div>
  </Docs>
  );
};

export default HomePage;
