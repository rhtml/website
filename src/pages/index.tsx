import Docs from '../wrappers/Docs';

const HomePage: React.FC = () => (
  <Docs>
    <div>
      <header>
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

export default HomePage;
