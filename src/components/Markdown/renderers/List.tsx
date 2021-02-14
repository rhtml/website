import { base } from '../../../css';

type ListProps = {
  ordered: boolean,
}

const List: React.FC<ListProps> = (props) => {
  const {
    ordered,
    children,
  } = props;

  const Element = ordered ? 'ol' : 'ul';

  return (
    <Element
      style={{
        marginBottom: base(),
      }}
    >
      {children}
    </Element>
  );
};

export default List;
