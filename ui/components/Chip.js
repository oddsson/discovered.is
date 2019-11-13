export const Chip = props => {
  const { text } = props;
  return (
    <>
      <span className="Chip">{text}</span>
      <style jsx>
        {`
          .Chip {
            font-size: 12px;
            align-self: flex-start;
            border-radius: 16px;
            background-color: ${text === "album" ? "#34495e" : "#c0392b"};
            color: white;
            padding: 4px 8px;
            margin-left: 16px;
          }
        `}
      </style>
    </>
  );
};
