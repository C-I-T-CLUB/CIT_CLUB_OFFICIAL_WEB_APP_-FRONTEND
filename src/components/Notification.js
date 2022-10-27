import '../assets/css/Notification.css'
export const Notification = ({ text, isSuccess = true, customColor =null ,style}) => {
  return (
    <div className="rectangle" style={{
        ...style,
        backgroundColor: customColor !== null ? customColor : isSuccess ? '#5cb85c' : '#d9534f'
    }}>
      <div className="notification-text">
        <i className="material-icons"></i>
        <span>&nbsp;&nbsp;{text}</span>
      </div>
    </div>
  );
};
