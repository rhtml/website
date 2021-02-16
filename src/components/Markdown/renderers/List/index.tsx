import { base } from '../../../../css';
import useStyles from './css';

type ListProps = {
  ordered: boolean,
}

const List: React.FC<ListProps> = (props) => {
  const {
    ordered,
    children,
  } = props;

  const Element = ordered ? 'ol' : 'ul';

  const classes = useStyles();

  return (
    <Element
      className={classes.list}
      style={{
        marginBottom: base(),
      }}
    >
      {children}
    </Element>
  );
};

export default List;
