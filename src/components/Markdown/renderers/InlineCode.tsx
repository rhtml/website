import { base, colors } from '../../../css';

type InlineCodeProps = {
  value: string,
}

const InlineCode: React.FC<InlineCodeProps> = (props) => {
  const {
    value,
  } = props;

  return (
    <code
      style={{
        padding: base(0.25),
        borderRadius: '4px',
        backgroundColor: colors.lightGray,
        fontSize: '85%',
      }}
    >
      {value}
    </code>
  );
};

export default InlineCode;
