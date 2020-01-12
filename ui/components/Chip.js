export const Chip = props => {
  const { text } = props;
  return (
    <>
      <span className="Chip">{text}</span>
      <style jsx>
        {`
          .Chip {
            font-size: 12px;
            font-weight: 500;
            align-self: flex-start;
            border-radius: 16px;
            background-color: ${text === "album" ? "#34495e" : "#c0392b"};
            color: white;
            padding: 5px 12px;
            margin: -1px 0 0 16px;  
          }
        `}
      </style>
    </>
  );
};
