interface AlertPropTypes {
  alert: { msg: string; type: string } | null;
}

const Alert: React.FC<AlertPropTypes> = ({ alert }) => {
  const capitalize = (word: string) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div
      style={{
        height: '60px',
        marginTop: '58px',
        position: 'sticky',
        top: '58px',
      }}
    >
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}: </strong> {alert.msg}
        </div>
      )}
    </div>
  );
};
export default Alert;
